import Router from '@koa/router';
import { triggerChrgebeeWebhook } from './webhook.controller';

const route = new Router();

route.prefix('/webhook');

route.post('/chargebee', triggerChrgebeeWebhook);

export default route.middleware();