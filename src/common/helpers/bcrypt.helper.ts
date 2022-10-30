import bcrypt from 'bcrypt';

export const getHash = (str: string, saltRounds: number): string => {
    return bcrypt.hashSync(str, saltRounds);
  }

  export const validateHash = (str: string, hash: string): boolean => {
    return bcrypt.compareSync(str, hash);
  }