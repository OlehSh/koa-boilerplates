import { User } from './user.entity';
import { container } from 'tsyringe';
import { UserService } from './user.service';
import { Context } from 'koa';

const userService = container.resolve(UserService);

export const getAllUsers = async (ctx: Context): Promise<void> => {
  ctx.body = await userService.findAll(<Partial<User>>ctx.request.body);
}

export const getUser = async (ctx: Context) => {
  console.log('CTX: --------------', ctx.params);
  ctx.body = await userService.find({ id: ctx.params.id });
}