import Joi = require('joi');
import { BadRequest } from '../../errors';

const userSchemas = {
  credentials: Joi.object({
    email: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
  }).error(() => new BadRequest('All fields must be filled')),
};

const teamSchemas = {};

export {
  userSchemas,
  teamSchemas,
};
