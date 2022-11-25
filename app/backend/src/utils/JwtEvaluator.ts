import * as Jwt from 'jsonwebtoken';
import 'dotenv/config';
import { Unauthorized } from '../errors';
import { JwtUserPayload } from '../interfaces';

const secret = process.env.JWT_SECRET as string;

export default class JwtEvaluator {
  public static createToken = (data: object) => Jwt.sign(data, secret, {
    algorithm: 'HS256', expiresIn: '1d',
  });

  public static validateToken = (token = ''): JwtUserPayload => {
    try {
      const result = Jwt.verify(token, secret) as JwtUserPayload;
      return result;
    } catch (error) {
      throw new Unauthorized('Token must be a valid token', error);
    }
  };
}
