import jwt from 'jsonwebtoken';

export const decodeToken = (token: string) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    console.error("Failed to decode token", error);
    return null;
  }
};
