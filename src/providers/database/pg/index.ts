import { singleton } from 'tsyringe';
import { DataSource, DataSourceOptions } from 'typeorm';
import env from '../../../config/env';

@singleton()
export class Pg {
  instance: DataSource;
  constructor() {
    this.instance = new DataSource(env.db as DataSourceOptions);
  }
}
