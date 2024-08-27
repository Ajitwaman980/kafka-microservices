// demo of microservices
const {Kafka }=require("kafkajs")//required kafka
const kafka =new Kafka({
    clientId:"myapp",
    brokers:["localhost:9092"]
});



const producer = kafka.producer()


const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'quickstart-events',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
}

run().catch(console.error)
module.exports=run;