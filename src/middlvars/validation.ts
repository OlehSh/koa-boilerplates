import { Context, Next } from 'koa';
import { Schema} from 'joi';

export const validate = (schema: Schema, ) => {
  return async (ctx: Context, next: Next) => {
    await next();
    try {
      schema.validate(ctx.request.body);
      await next();
    } catch (error) {
      ctx.status = 400;
    }
  }
}