import router from 'koa-joi-router';

const route = router();

route.prefix('/health');

route.get('/', async (ctx) => {
  ctx.body = 'Ok';
});

export default route.middleware();