import { injectable } from 'tsyringe';
import { User } from './user.entity';
import { FindOptionsSelect, InsertResult, Repository } from 'typeorm';
import { Pg } from '../../../providers/database/pg';

@injectable()
export class UserService {
  userRepository: Repository<User>;
  constructor(pg: Pg) {
    this.userRepository = pg.dataSource.getRepository(User);
  }

  users() {
    try {
     return  this.userRepository.find();
    } catch (error) {
      throw error;
    }
  }
  async create(user: Partial<User>): Promise<Omit<User, 'password'>> {
    try {
      const newUser = this.userRepository.create(user);
      const savedUser: InsertResult = await this.userRepository.insert(newUser);
      return this.userRepository.findOne({
        where: { id: savedUser.raw[0].id }
      });
    } catch (error) {
      throw error;
    }
  }

  async find(user: Partial<User>, fields?: FindOptionsSelect<User>): Promise<User> {
    try {
      return this.userRepository.findOne({
        where: user,
        select: fields,
      });
    } catch (error) {
      throw error;
    }
  }
  async findAll(user?: Partial<User>, fields?: FindOptionsSelect<User>): Promise<User[]> {
    try {
      return this.userRepository.find({
        where: user,
        select: fields,
      });
    } catch (error) {
      throw error;
    }
  }
}