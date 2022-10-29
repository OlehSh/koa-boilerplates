import { User } from './user.entity';
import { Repository } from 'typeorm';
import { inject } from 'tsyringe';
import { Pg } from '../../../providers/database/pg';


export class UserService {
  userRepository: Repository<User>
  constructor(@inject('Pg') pg: Pg) {
    this.userRepository = pg.instance.getRepository(User);
  }

  users() {
    try {
     return  this.userRepository.find();
    } catch (error) {
      throw error;
    }
  }
}