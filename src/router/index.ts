import router from 'koa-joi-router';
import v1 from './v1';

const route = router();
route.use(v1);
export default route;