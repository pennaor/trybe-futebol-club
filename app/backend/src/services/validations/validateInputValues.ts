import UserCredentials from '../../types/UserCredentials';
import { userSchemas } from './schemas';

function userCredentials(input: UserCredentials): null {
  const { error } = userSchemas.credentials.validate(input);
  if (error) {
    throw error;
  }
  return null;
}

function teamSomething() {}

export default {
  userCredentials,
  teamSomething,
};
