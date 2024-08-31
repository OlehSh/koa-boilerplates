import Router from '@koa/router';
import v1 from './v1';

const route = new Router();
route.use(v1);
export default route;