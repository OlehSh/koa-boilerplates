import koaPassport from "koa-passport";
import { container } from "tsyringe";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { UserService } from '../api/user/user.service';
import env from "../../config/env";
import { User } from '../api/user/user.entity';

const userService = container.resolve(UserService)

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.token.secret,
}

export default function initStrategy(): void {
  koaPassport.use('jwt', new JwtStrategy(opts, (payload: Partial<User>, done) => {
    userService.find({ id: payload.id })
      .then(user => {
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
      .catch(e => {
        return done(e)
      })
    // done(null, payload)
  }));
}