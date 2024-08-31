import { Context } from 'koa';

export const triggerChrgebeeWebhook = async (ctx: Context) => {
  console.log('CTX: --------------', ctx.request);
  ctx.body = 'Ok';
}