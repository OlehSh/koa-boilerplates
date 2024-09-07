import Router from '@koa/router';
import { getAllUsers, getUser } from './user.controller';
import { authenticate } from '../../../middlvars/authorization';
const route = new Router();

route.prefix('/user');

route.get('/', authenticate, getAllUsers);

route.get('/:id',authenticate, getUser);

export default route.middleware();