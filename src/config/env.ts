import path from 'path';
import * as dotenv from 'dotenv'

const inTest = typeof global.it === 'function';
const dotenvPath = inTest ? path.join(__dirname, '../..', '.env.test') : path.join(__dirname, '../..', '.env');
dotenv.config({path: dotenvPath});

export default {
  port: process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000,
  host: process.env.APP_HOST || 'localhost',
  auth: {
    saltRounds: process.env.SALT_ROUNDS ? Number(process.env.SALT_ROUNDS) : 8,
  },
  token: {
    secret: process.env.TOKEN_SECRET || 'secret',
    expirationTime: process.env.TOKEN_EXPIRATION_TIME || '5h',
  },
  db: {
    type: process.env.DB_CONNECTION || '',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    database: process.env.DB_NAME || '',
    username: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || '',
    synchronize:
      process.env.DB_SYNCHRONIZE &&
      process.env.DB_SYNCHRONIZE.toLowerCase() === 'true',
    logging:
      process.env.DB_LOGGING &&
      process.env.DB_LOGGING.toLowerCase() === 'true',
    entities: process.env.DB_ENTITIES
      ? [process.env.DB_ENTITIES]
      : [`${__dirname}/../modules/api/**/*.entity.{js,ts}`],
    migrations: process.env.DB_MIGRATIONS
      ? [__dirname + process.env.DB_MIGRATIONS]
      : [`${__dirname}/../providers/database/pg/migrations/*.{js,ts}`],
  }
}