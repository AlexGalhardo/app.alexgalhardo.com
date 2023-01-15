import app from "./app";
import RabbitMQ from "./config/rabbitmq";

app.listen(process.env.PORT || 3000, () => {
    // RabbitMQ.sendMessage('server-start', 'SERVIDOR COMEÇOU');
    // RabbitMQ.consumeMessage('server-start');

    console.log(`Galhardo APP Server started at ${process.env.APP_URL}`);
});
