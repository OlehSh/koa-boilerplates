import { singleton } from 'tsyringe';
import { DataSource, DataSourceOptions } from 'typeorm';
import env from '../../../config/env';

@singleton()
export class Pg {
  dataSource: DataSource;
  constructor() {
    this.dataSource = new DataSource(env.db as DataSourceOptions);
  }
}
