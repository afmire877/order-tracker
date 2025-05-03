import Koa from "koa";
const app = new Koa();
import Router from "@koa/router";

const router = new Router();
// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
  ctx.set("service", `consumer`);
});

// response
router.get("/orders/:id/eta", (ctx, next) => {});

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.use(router.routes());

app.listen(3000);
