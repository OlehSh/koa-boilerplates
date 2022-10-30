import { injectable } from 'tsyringe';
import { User } from '../user/user.entity';
import { createToken} from '../../../common/helpers/jwt.helper';
import { getHash } from '../../../common/helpers/bcrypt.helper';
import env from '../../../config/env';

@injectable()
export class AuthService {

  getPasswordHash(password: string): string {
    return getHash(password, env.auth.saltRounds);
  }

  signIn(user: Partial<User>): string {
    return createToken<Partial<User>>(user, env.token.secret, { expiresIn: env.token.expirationTime });
  }
}