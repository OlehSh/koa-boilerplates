import { Pg } from './index';

function dataSourceCli() {
  return new Pg().dataSource;
}

export default dataSourceCli();