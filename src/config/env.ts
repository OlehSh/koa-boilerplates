import path from 'path';
import * as dotenv from 'dotenv'

const inTest = typeof global.it === 'function';
const dotenvPath = inTest ? path.join(__dirname, '../..', '.env.test') : path.join(__dirname, '../..', '.env');
dotenv.config({path: dotenvPath});

export default {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  host: process.env.HOST || 'localhost',
  auth: {
    saltRounds: process.env.SALT_ROUNDS ? Number(process.env.SALT_ROUNDS) : 8,
  },
  token: {
    secret: process.env.TOKEN_SECRET || 'secret',
    expirationTime: process.env.TOKEN_EXPIRATION_TIME || '5h',
  }
}