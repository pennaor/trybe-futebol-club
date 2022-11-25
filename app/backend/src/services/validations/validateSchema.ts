import { IMatch } from '../../interfaces';
import { BadRequest, UnprocessableEntity } from '../../errors';
import UserCredentials from '../../types/UserCredentials';
import { userSchemas, identifierSchema, matchSchemas } from './schemas';

const identifier = (input: number) => {
  const { error } = identifierSchema.validate(input);
  if (!error) {
    return null;
  }
  throw new BadRequest(error.message, error);
};

const userCredentials = (input: UserCredentials) => {
  const { error } = userSchemas.credentials.validate(input);
  if (!error) {
    return null;
  }
  if (error.message.match(/required|empty/)) {
    throw new BadRequest('All fields must be filled', error);
  }
  throw new BadRequest(error.message, error);
};

const newMatch = (input: IMatch) => {
  const { error } = matchSchemas.onCreate.validate(input);
  if (!error) {
    return null;
  }
  if (error.message.includes('invalid value')) {
    throw new UnprocessableEntity('It is not possible to create a match with two equal teams');
  }
  throw new BadRequest(error.message, error);
};

export default {
  userCredentials,
  identifier,
  newMatch,
};
