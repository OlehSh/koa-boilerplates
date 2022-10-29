import router from 'koa-joi-router';
import healthRouter from '../../modules/api/health/health.router';
import authRouter from '../../modules/api/auth/auth.router';
import userRouter from '../../modules/api/user/user.router';

const apiRouter = router();

apiRouter.prefix('/v1');
apiRouter.use(healthRouter)
apiRouter.use(authRouter)
apiRouter.use(userRouter)

export default apiRouter.middleware();