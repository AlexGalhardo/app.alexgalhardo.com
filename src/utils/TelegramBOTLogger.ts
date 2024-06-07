// https://api.telegram.org/bot<telegram_token_here>/getUpdates

import https from "https";
import { SendContactDTO } from "src/utils/DTOs";

import DateTime from "./DateTime";

class TelegramBOTLogger {
    private token: string;
    private channelName: string;
    private baseUrl: string;

    constructor(token: string, channelName: string) {
        this.isThereToken(token);
        this.isThereChannel(channelName);
        this.token = token;
        this.channelName = channelName;
        this.baseUrl = `https://api.telegram.org/bot${token}`;
    }

    isThereToken(token: string) {
        if (!token) throw new Error("There is no Telegram Token in TelegramLogger Class Constructor");
    }

    isThereChannel(channel: string) {
        if (!channel) throw new Error("There is no Telegram Channel name in TelegramLogger Class Constructor");
    }

    emojiMap() {
        return {
            CONTACT: "💬",
            ERROR: "🚨",
        };
    }

    sendMessage(level: string, type: string, message: string) {
        const emoji = this.emojiMap()[level];

        const messageToSend = `${emoji} ${type} ${emoji}\n\n <b>Created at:</b> ${DateTime.getNow()}\n ${message}`;

        const urlParams = encodeURI(`chat_id=${this.channelName}&text=${messageToSend}&parse_mode=HTML`);

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    logContact(contactObject: SendContactDTO) {
        const emoji = this.emojiMap().CONTACT;

        const log = `
        <b>CONTACT_FROM_NAME:</b> ${contactObject.name}
        <b>CONTACT_FROM_EMAIL:</b> ${contactObject.email}
        <b>SUBJECT:</b> ${contactObject.subject}
        ---------------------------------------
        <b>MESSAGE:</b> ${contactObject.message}
                    `;

        const message = `${emoji} CONTACT ${emoji}\n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${log}`;

        const urlParams = encodeURI(`chat_id=${this.channelName}&text=${message}&parse_mode=HTML`);

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    sendRequest(url: string) {
        return new Promise((resolve, reject) => {
            https
                .get(url, (res) => {
                    const { statusCode } = res;
                    let data = "";

                    res.on("data", (chunk) => {
                        data += chunk;
                    });

                    res.on("end", () => {
                        if (statusCode !== 200) {
                            console.log(data);
                        }
                    });
                })
                .on("error", (e) => {
                    console.log(e);
                    reject(e);
                });
        });
    }
}

export default new TelegramBOTLogger(
    process.env.TELEGRAM_BOT_HTTP_TOKEN as string,
    process.env.TELEGRAM_BOT_CHANNEL_ID as string,
);
