import Joi = require('joi');
import UserCredentials from '../../types/UserCredentials';
import { userSchemas, identifierSchema } from './schemas';

function validateSchema<T>(schema: Joi.AnySchema, input: T) {
  const { error } = schema.validate(input);
  if (error) {
    throw error;
  }
  return null;
}

const identifier = (input: number) => validateSchema(identifierSchema, input);

const userCredentials = (input: UserCredentials) => validateSchema(userSchemas.credentials, input);

export default {
  userCredentials,
  identifier,
};
