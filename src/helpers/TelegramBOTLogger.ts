/**
 * GALHARDO APP
 * Created By © Alex Galhardo  | August 2021-Present
 * aleexgvieira@gmail.com
 * https://github.com/AlexGalhardo
 *
 * ./helpers/TelegramBOTLogger.js
 *
 * https://api.telegram.org/bot<telegram_token_here>/getUpdates
 * bot
 */

import https from 'https';

import DateTime from './DateTime';

class TelegramBOTLogger {
    private token: string;
    private channelName: string;
    private baseUrl: string;

    constructor(token, channelName) {
        this.isThereToken(token);
        this.isThereChannel(channelName);
        this.token = token;
        this.channelName = channelName;
        this.baseUrl = `https://api.telegram.org/bot${token}`;
    }

    isThereToken(token) {
        if (!token)
            throw new Error(
                'There is no Telegram Token in TelegramLogger Class Constructor'
            );
    }

    isThereChannel(channel) {
        if (!channel)
            throw new Error(
                'There is no Telegram Channel name in TelegramLogger Class Constructor'
            );
    }

    emojiMap() {
        return {
            CONTACT: '💬',
            ERROR: '🚨',
            SUBSCRIPTION: '🏆',
            SHOP: '💵',
        };
    }

    sendMessage(level, type, message) {
        const emoji = this.emojiMap()[level];

        message = `${emoji} ${type} ${emoji}\n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${message}`;

        const urlParams = encodeURI(
            `chat_id=${this.channelName}&text=${message}&parse_mode=HTML`
        );

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    logContact(contactObject) {
        const emoji = this.emojiMap().CONTACT;

        const log = `
        <b>CONTACT_FROM_NAME:</b> ${contactObject.name}
        <b>CONTACT_FROM_EMAIL:</b> ${contactObject.email}
        <b>SUBJECT:</b> ${contactObject.subject}
        ---------------------------------------
        <b>MESSAGE:</b> ${contactObject.message}
                    `;

        const message = `${emoji} CONTACT ${emoji}\n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${log}`;

        const urlParams = encodeURI(
            `chat_id=${this.channelName}&text=${message}&parse_mode=HTML`
        );

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    logShopTransaction(shopTransactionObject) {
        const emoji = this.emojiMap().SHOP;

        const log = `
        <b>TRANSACTION_ID:</b> ${shopTransactionObject.transaction_id}
        <b>PAID: </b> ${shopTransactionObject.paid}
        <b>AMOUNT: $</b> ${shopTransactionObject.total_amount}
        <b>GATEWAY: </b> Stripe
        <b>PAYMENT_METHOD: </b> ${shopTransactionObject.card_id}
        ---------------------------------------
        <b>CUSTOMER_EMAIL:</b> ${shopTransactionObject.user_email}
        <b>CUSTOMER_ID:</b> ${shopTransactionObject.user_id}
        <b>CUSTOMER_STRIPE_ID:</b> ${shopTransactionObject.stripe_customer_id}
        ---------------------------------------
        <b>PRODUCTS:</b> ${JSON.stringify(shopTransactionObject.products)}
        ---------------------------------------
        <b>SHIPPING_ZIPCODE: </b> ${shopTransactionObject.shipping_address_zipcode
            }
        <b>SHIPPING_STREET:</b> ${shopTransactionObject.shipping_address_street}
        <b>SHIPPING_NEIGHBORHOOD:</b> ${shopTransactionObject.shipping_address_neighborhood
            }
        <b>SHIPPING_CITY:</b> ${shopTransactionObject.shipping_address_city}
        <b>SHIPPING_STATE:</b> ${shopTransactionObject.shipping_address_state}
        <b>SHIPPING_COUNTRY:</b> BRAZIL
        `;

        const message = `${emoji} SHOP TRANSACTION ${emoji}\n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${log}`;

        const urlParams = encodeURI(
            `chat_id=${this.channelName}&text=${message}&parse_mode=HTML`
        );

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    logSubscriptionTransaction(subsTransactionObject) {
        const emoji = this.emojiMap().SUBSCRIPTION;

        const log = `
        <b>TRANSACTION_ID:</b> ${subsTransactionObject.transaction_id}
        <b>STATUS: </b> ${subsTransactionObject.status}
        ---------------------------------------------
        <b>PLAN_NAME:</b> ${subsTransactionObject.plan_name}
        <b>PLAN_AMOUNT:</b> ${subsTransactionObject.plan_amount}
        ---------------------------------------------
        <b>CARD_ID:</b> ${subsTransactionObject.card_id}
        ---------------------------------------------
        <b>CUSTOMER_ID:</b> ${subsTransactionObject.user_id}
        <b>CUSTOMER_STRIPE_ID:</b> ${subsTransactionObject.stripe_customer_id}
        <b>CUSTOMER_EMAIL:</b> ${subsTransactionObject.user_email}
        <b>CUSTOMER_NAME:</b> ${subsTransactionObject.user_name}
        `;

        const message = `${emoji} SUBSCRIPTION TRANSACTION ${emoji}\n\n <b>CREATED_AT:</b> ${DateTime.getNow()}\n ${log}`;

        const urlParams = encodeURI(
            `chat_id=${this.channelName}&text=${message}&parse_mode=HTML`
        );

        const url = `${this.baseUrl}/sendMessage?${urlParams}`;

        this.sendRequest(url);
    }

    sendRequest(url) {
        return https
            .get(url, (res) => {
                const { statusCode } = res;
                if (statusCode !== 200) {
                    let data;
                    res.on('data', (chunk) => {
                        data += chunk;
                    });
                    res.on('end', () => {
                        console.log(data);
                    });
                }
            })
            .on('error', (e) => {
                console.log(e);
            });
    }
}

export default new TelegramBOTLogger(
    process.env.TELEGRAM_BOT_HTTP_TOKEN,
    process.env.TELEGRAM_BOT_CHANNEL_ID
);
