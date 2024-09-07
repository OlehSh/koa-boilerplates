import Router from '@koa/router';
import healthRouter from '../../modules/api/health/health.router';
import authRouter from '../../modules/api/auth/auth.router';
import userRouter from '../../modules/api/user/user.router';
import webhookRouter from '../../modules/api/webhooks/webhook.router';

const apiRouter = new Router();

apiRouter.prefix('/v1');
apiRouter.use(healthRouter)
apiRouter.use(authRouter)
apiRouter.use(userRouter)
apiRouter.use(webhookRouter)

export default apiRouter.middleware();