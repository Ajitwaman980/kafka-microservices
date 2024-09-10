// demo of microservices
const {Kafka }=require("kafkajs")//required kafka
const kafka =new Kafka({
    clientId:"myapp",
    brokers:["localhost:9092"]
});


// producer 
const producer = kafka.producer()

// run function 
const run = async () => {
  // Producing
  await producer.connect()//conecting
  await producer.send({
    topic: 'quickstart-events',//topic topic may be any topic like payment-done,payment anything
    messages: [
      { value: 'Hello KafkaJS user!' },//mes send 
    ],
  })
}

run().catch(console.error)
module.exports=run;