import jwt, { SignOptions } from 'jsonwebtoken';

export function createToken<T extends string | object | Buffer>(payload: T, secret: string, options?: SignOptions): string {
    return jwt.sign(payload, secret, options);
  }