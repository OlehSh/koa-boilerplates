import Router from '@koa/router';
import { signUpBodySchema, signInBodySchema } from './auth.validator';
import { validate } from '../../../middlvars/validation';
import { signIn, signUp } from './autn.controller';

const route = new Router();

route.prefix('/auth');

route.post('/sign-up', validate(signUpBodySchema), signUp);

route.post('/sign-in', validate(signInBodySchema), signIn);

export default route.middleware();