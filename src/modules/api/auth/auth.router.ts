import router from 'koa-joi-router';
import { container } from 'tsyringe';
import { signUpBodyValidator,signInBodyValidator } from './auth.validator';
import { CONTENT_TYPE } from '../../../common/types/request';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { Context } from 'koa';
import { validateHash } from '../../../common/helpers/bcrypt.helper';
import { FindOptionsSelect } from 'typeorm';
import { User } from '../user/user.entity';

const authService = container.resolve(AuthService);
const userService = container.resolve(UserService);

const route = router();

route.prefix('/auth');

route.post('/sign-up', {
  validate: {
    type: CONTENT_TYPE.JSON,
    body: signUpBodyValidator,
    validateOptions: {
      abortEarly: false,
    }
  }
}, async (ctx: Context) => {
  const { body } =ctx.request;
  const hash = authService.getPasswordHash(body.password);
  ctx.body = await userService.create({ ...body, password: hash });
});

route.post('/sign-in', {
  validate: {
    type: CONTENT_TYPE.JSON,
    body: signInBodyValidator,
    validateOptions: {
      abortEarly: false,
    }
  }
}, async (ctx: Context) => {
  const { email, password } = ctx.request.body;
  const user = await userService.find({ email }, ['id', 'email', 'password', 'firstname', 'lastname'] as FindOptionsSelect<User>);
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
    }
  };
});

export default route.middleware();