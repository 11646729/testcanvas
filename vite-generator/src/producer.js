// The promise-based API is the “main” module in the library:
// var amqp = require("amqplib")
// You can access the callback-based API this way:
// var amqp = require('amqplib/callback_api');

import amqp from "amqplib"
import { rabbitMQ } from "./rtMockDatafeedConfig.js"

//step 1 : Connect to the rabbitmq server
//step 2 : Create a new channel on that connection
//step 3 : Create the exchange
//step 4 : Publish the message to the exchange with a routing key

class Producer {
  channel

  async createChannel() {
    const connection = await amqp.connect(rabbitMQ.url) //  DO NOT REMOVE await HERE
    this.channel = await connection.createChannel()
  }

  async publishMessage(routingKey, message) {
    if (!this.channel) {
      await this.createChannel()
    }

    const exchangeName = rabbitMQ.exchangeName
    await this.channel.assertExchange(exchangeName, rabbitMQ.exchangeType, {
      durable: false,
    })

    const envelopeDetails = {
      messageType: routingKey,
      message: message,
      dateTime: new Date(),
    }

    await this.channel.publish(
      exchangeName,
      routingKey,
      Buffer.from(JSON.stringify(envelopeDetails))
    )

    console.log(
      `The new ${routingKey} string is sent to exchange ${exchangeName}`
    )
  }
}

export default Producer