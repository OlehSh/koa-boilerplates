import { injectable } from 'tsyringe';
import { User } from '../user/user.entity';
import { createToken} from '../../../common/helpers/jwt.helper';
import { getSalt, hashPassword } from '../../../common/helpers/crypto.helper';
import env from '../../../config/env';

@injectable()
export class AuthService {

  getPasswordHash(password: string): string {
    return hashPassword(password, getSalt(env.auth.saltRounds));
  }

  signIn(user: Partial<User>): string {
    return createToken<Partial<User>>(user, env.token.secret, { expiresIn: env.token.expirationTime });
  }
}