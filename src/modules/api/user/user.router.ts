import router from 'koa-joi-router';
import koaPassport from 'koa-passport';
import { container } from 'tsyringe';
import { UserService } from './user.service';

const userService = container.resolve(UserService);

const route = router();

route.prefix('/user');

route.get('/', koaPassport.authenticate('jwt', {session: false}),async (ctx) => {
  ctx.body = await userService.findAll(ctx.request.body);
});

export default route.middleware();