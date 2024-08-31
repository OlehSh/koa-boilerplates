import Router from '@koa/router';
import koaPassport from 'koa-passport';
import { container } from 'tsyringe';
import { UserService } from './user.service';
import { User } from './user.entity';

const userService = container.resolve(UserService);

const route = new Router();

route.prefix('/user');

route.get('/', koaPassport.authenticate('jwt', {session: false}),async (ctx) => {
  ctx.body = await userService.findAll(<Partial<User>>ctx.request.body);
});

export default route.middleware();