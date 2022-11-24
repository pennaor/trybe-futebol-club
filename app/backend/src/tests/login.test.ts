import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
// @ts-ignore
import bcryptjs = require('bcryptjs');
import App from '../app';
import User from '../database/models/User';
import JwtEvaluator from '../utils/JwtEvaluator';
import { mockToken, validCredentials, user } from './mocks/user';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Rota de login', async function () {
  it('a api deve responder com um token se passado credenciais de usuário válidas', async function () {
    const compareSync = sinon
      .stub(bcryptjs, 'compareSync')
      .returns(true);

    const userFindOne = sinon
      .stub(User, 'findOne')
      .resolves({ dataValues: { ...user } } as User);

    const response = await chai
      .request(app)
      .post('/login')
      .send(validCredentials.user);

    expect(response.status).to.be.equal(200);    
    expect(response.body).to.haveOwnProperty('token');    
    expect(response.body.token).to.be.a('string');    
    expect(response.body.token).to.have.length(mockToken.length);

    userFindOne.restore();
    compareSync.restore();
  });

  it('a api deve responder com o Id e role do usuário da requisição GET "/login/validate"', async function () {
    const verifyToken = sinon
      .stub(JwtEvaluator, 'validateToken')
      .returns({ id: user.id, role: user.role });

    const response = await chai
      .request(app)
      .get('/login/validate')
      .set({ 'Authorization': mockToken });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.not.haveOwnProperty('id');
    expect(response.body).to.haveOwnProperty('role');    
    expect(response.body.role).to.be.equal(user.role);

    verifyToken.restore();
  });
});
