import { RequestHandler } from 'express';
import JwtEvaluator from '../utils/JwtEvaluator';

const authenticateUser: RequestHandler = (req, _res, next) => {
  const token = req.header('authorization');
  req.body.user = JwtEvaluator.validateToken(token);
  return next();
};

export default authenticateUser;
