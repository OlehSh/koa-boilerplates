import { Context } from 'koa';

export const getAppStatus = async (ctx: Context) => {
  ctx.body = 'Ok';
}