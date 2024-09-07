import Router from '@koa/router';
import { getAppStatus } from './health.controller';

const route = new Router();

route.prefix('/health');

route.get('/', getAppStatus);

export default route.middleware();