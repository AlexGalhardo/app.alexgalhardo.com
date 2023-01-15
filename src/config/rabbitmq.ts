/* eslint-disable prettier/prettier */
import client, { Connection, Channel, ConsumeMessage, Message } from "amqplib";
import "dotenv/config";
import NodeMailer from "../helpers/NodeMailer";
import TelegramBOTLogger from "../helpers/TelegramBOTLogger";
import StripeModel from "../repositories/StripeModel";
import Users from "../repositories/Users";

class RabbitMQ {
	private connection: Connection | null = null;
	private channel: Channel | null = null;
	private shopTransactionsChannel: Channel | null = null;
	private serverStart: Channel | null = null;

	constructor() {
		(async () => {
			this.connection = await client.connect(process.env.RABBITMQ_URL as string);
			this.shopTransactionsChannel = await this.connection.createChannel();
			this.serverStart = await this.connection.createChannel();
			await this.shopTransactionsChannel.assertQueue('shop-transactions-queue');
			await this.serverStart.assertQueue('server-start');
		})()
	}

	private consumer =
		(channel: Channel) =>
			async (msg: any): Promise<void> => {
				if (msg) {
					console.log('\n\n msg.content.toString() => ', msg.content.toString() + '\n\n');

					if (channel === this.shopTransactionsChannel) {
						console.log('\n\n---> ENTROU channel === this.shopTransactionsChannel\n\n')
						// await StripeModel.createShopTransaction(JSON.parse(msg.content.toString()));
						NodeMailer.sendShopTransaction(JSON.parse(msg.content.toString()));
						TelegramBOTLogger.logShopTransaction(JSON.parse(msg.content.toString()));
						Users.removeAllShopCartItens();
					}

					channel.ack(msg);
				}
			};

	public async sendMessage (queue: string, message: string) {
		console.log(`\n\n~~~RABBITMQ: entrou no sendMessage com queue: ${queue} e message: ${message}`)
		if (queue === 'shop-transactions-queue') {
			this.shopTransactionsChannel?.sendToQueue(queue, Buffer.from(message));
			await this.shopTransactionsChannel?.close();
		}
		else {
			this.serverStart?.sendToQueue(queue, Buffer.from(message));
			// await this.serverStart?.close();
		}
	}

	public async consumeMessage (queue: string) {
		console.log(`\n\n~~~RABBITMQ: entrou no consumeMessage com queue: ${queue}\n\n`)
		if (queue === 'shop-transactions-queue') {
			await this.shopTransactionsChannel?.consume(queue, this.consumer(this.shopTransactionsChannel));
		}
		else {
			await this.serverStart?.consume(queue, this.consumer(this.serverStart));
		}
	}


	public async connectQueue () {
		try {
			this.connection = await client.connect(process.env.RABBITMQ_URL as string);
			this.channel = await this.connection.createChannel()

			await this.channel.assertQueue("shop-transactions")

		} catch (error) {
			console.log(error)
		}
	}
	// RabbitMQ.connectQueue ()

	public async sendData (data: string) {
		this.channel?.sendToQueue("shop-transactions", Buffer.from(data));
		await this.channel?.close();
		await this.connection?.close();
	}

	public async consumeShopTransaction () {
		try {
			this.channel?.consume("shop-transactions", (data: any) => {
				console.log('data => ', data)
				console.log(`Buffer.from(data) => `, Buffer.from(data));
				console.log(`${Buffer.from(data.content)}`);


				console.log('\n\n---> ENTROU consumeShopTransaction\n\n')
				// await StripeModel.createShopTransaction(JSON.parse(msg.content.toString()));
				NodeMailer.sendShopTransaction(JSON.parse(data.content.toString()));
				TelegramBOTLogger.logShopTransaction(JSON.parse(data.content.toString()));
				Users.removeAllShopCartItens();


				this.channel?.ack(data);
			})
		} catch (error) {
			console.log(error);
		}
	}
}

export default new RabbitMQ();
