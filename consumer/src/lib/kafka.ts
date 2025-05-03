import { Kafka, logLevel } from "kafkajs";

const host = process.env.KAFKA_BROKER ?? "kafka:9092";

export const kafka = new Kafka({
  logLevel: logLevel.DEBUG,
  brokers: [host],
  clientId: "producer",
});
