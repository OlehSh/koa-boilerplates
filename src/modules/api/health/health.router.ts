import router from 'koa-joi-router';
import { getAppStatus } from './health.controller';

const route = router();

route.prefix('/health');

route.get('/', getAppStatus);

export default route.middleware();