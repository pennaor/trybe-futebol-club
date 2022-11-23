import { compareSync } from 'bcryptjs';
import UserCredentials from '../types/UserCredentials';
import User from '../database/models/User';
import JwtEvaluator from '../utils/JwtEvaluator';
import { JwtUserPayload } from '../interfaces';
import validate from './validations/validateInputValues';
import { Unauthorized } from '../errors';

class LoginService {
  private _model = User;

  private _jwt = new JwtEvaluator();

  public login = async (credentials: UserCredentials): Promise<string> => {
    validate.userCredentials(credentials);
    const { email, password } = credentials;

    const user = await this._model.findOne({ where: { email } });
    if (!user || !compareSync(password, user.dataValues.password)) {
      throw new Unauthorized('Incorrect email or password');
    }

    const { id, role } = user.dataValues;
    return this._jwt.createToken({ id, role });
  };

  public validate = (token = ''): JwtUserPayload => this._jwt.validateToken(token);
}

export default LoginService;
