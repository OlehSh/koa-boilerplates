import { Pg } from './index';

function cliDataSource() {
  return new Pg().dataSource;
}

export default cliDataSource();