import router from 'koa-joi-router';

const route = router();

route.prefix('/user');

route.get('/', async (ctx) => {
  ctx.body = 'get user!!!';
});

export default route.middleware();