import { Context } from 'koa';
import { container } from 'tsyringe';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { validateHash } from '../../../common/helpers/crypto.helper';

const authService = container.resolve(AuthService);
const userService = container.resolve(UserService);

export const signUp = async (ctx: Context) => {
  try {
    const userDat =<Partial<User>>ctx.request.body;
    const hash = authService.getPasswordHash(userDat.password);
    ctx.body = await userService.create({ ...userDat, password: hash });
  } catch (error) {
    ctx.message = 'Signup failed';
  }
}

export const signIn = async (ctx: Context) => {
  ctx.body = 'ok signIn';
  const { email, password } = <{ email: string, password: string}>ctx.request.body;
  const user = await userService.find({ email }, {
    id: true,
    firstname: true,
    lastname: true,
    password: true,
  });
  ctx.assert(user, 404, 'User not found');
  ctx.assert(validateHash(password, user.password), 401, 'Unauthorized');
  const { id, firstname, lastname } = user;
  const token = authService.signIn({ id, firstname, lastname });
  ctx.body = {
    token,
    user: {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    },
  };
}