import Koa from 'koa';
import session from 'koa-session';
import koaBody from 'koa-body';
import logger from 'koa-logger';
import env from './config/env';
import route from './router';
import { HttpMethodEnum } from 'koa-body/lib/types';
import bodyParser from 'koa-bodyparser';

const app = new Koa<Koa.DefaultState>();

app.keys = [env.token.secret];

app.use(bodyParser());
app.use(session({}, app));
app.use(logger())
app.use(route.middleware());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.status as number || 500;
    ctx.body = {
      status: 'error',
      details: err.message as string,
    };
    ctx.app.emit('error', err, ctx);
  }
});
app.use(koaBody({
  multipart: true,
  parsedMethods:[
    HttpMethodEnum.PUT,
    HttpMethodEnum.POST,
    HttpMethodEnum.PATCH,
    HttpMethodEnum.GET,
    HttpMethodEnum.DELETE
  ],
  formidable: {
    maxFileSize: 100 * 1024 * 1024 // 100 Mb
  }
}));

app.on('error', (err, ctx) => {
  console.error('server error', err);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  ctx.assert(err, err.status, err.message)
});

export default app
