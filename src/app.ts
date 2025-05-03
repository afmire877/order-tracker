import { Kafka, logLevel } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:29092"],
  logLevel: logLevel.ERROR,
});

const main = async () => {
  try {
    console.log("runnnig main");
    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS user!" }],
    });
    console.log("sent");
    await producer.disconnect();
  } catch (e) {
    console.error("Message:", e);
  }
};

main();
