import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';
import env from '../config/env';

export const authenticate = async (ctx: Context, next: Next) => {
    ctx.assert(ctx.request.header.authorization, 401, 'Unauthorized');
    const user = jwt.verify(ctx.request.header.authorization.split(' ')[1], env.token.secret);
    if (!user) {
      ctx.throw(401);
    }
    await next();
}