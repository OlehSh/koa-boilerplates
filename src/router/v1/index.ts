import router from 'koa-joi-router';
import healthRouter from '../../modules/health/router';

const apiRouter = router();

apiRouter.prefix('/v1');
apiRouter.use(healthRouter)

export default apiRouter.middleware();