import * as crypto from 'node:crypto';

export const getSalt = (saltRounds: number): string => {
  return crypto.randomBytes(saltRounds).toString('hex');
}
export const hashPassword = (str: string, salt: string): string => {
  const hash = crypto.scryptSync(str, salt, 64 ).toString('hex');
  return `${salt}:${hash}`;
  }

  export const validateHash = (str: string, hash: string): boolean => {
    const [salt] = hash.split(':');
    const pwHash = hashPassword(str, salt);
    return pwHash === hash;
  }