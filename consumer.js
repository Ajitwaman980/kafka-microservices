// demo of microservices
const {Kafka }=require("kafkajs")//required kafka
const kafka =new Kafka({
    clientId:"myapp",
    brokers:["localhost:9092"]
});
//  this is diffent groupId
// const consumer = kafka.consumer({ groupId: 'test-group'+Math.random() })
const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {

  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)
module.exports=run;