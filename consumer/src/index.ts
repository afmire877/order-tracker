import { kafka } from "./lib/kafka";
const topic = "topic-test";
const producer = kafka.producer();

// const createMessage = (num) => ({
//   key: `key-${num}`,
//   value: `value-${num}-${new Date().toISOString()}`,
// });

// const sendMessage = () => {
//   return producer
//     .send({
//       topic,
//       compression: CompressionTypes.GZIP,
//       messages: Array(getRandomNumber())
//         .fill()
//         .map((_) => createMessage(getRandomNumber())),
//     })
//     .then(console.log)
//     .catch((e) => console.error(`[example/producer] ${e.message}`, e));
// };

// run().catch((e) => console.error(`[example/producer] ${e.message}`, e));

// const errorTypes = ["unhandledRejection", "uncaughtException"];
// const signalTraps = ["SIGTERM", "SIGINT", "SIGUSR2"];

// errorTypes.forEach((type) => {
//   process.on(type, async () => {
//     try {
//       console.log(`process.on ${type}`);
//       await producer.disconnect();
//       process.exit(0);
//     } catch (_) {
//       process.exit(1);
//     }
//   });
// });

// signalTraps.forEach((type) => {
//   process.once(type, async () => {
//     try {
//       await producer.disconnect();
//     } finally {
//       process.kill(process.pid, type);
//     }
//   });
// });
