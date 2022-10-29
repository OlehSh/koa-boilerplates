import router from 'koa-joi-router';
import { signUpBodyValidator } from './auth.validator';
import { CONTENT_TYPE } from '../../../common/types/request';

const route = router();

route.prefix('/auth');

route.post('/sign-up', {
  validate: {
    type: CONTENT_TYPE.JSON,
    body: signUpBodyValidator,
    continueOnError: true,
  }
}, async (ctx) => {
  ctx.body = 'Ok';
});

export default route.middleware();