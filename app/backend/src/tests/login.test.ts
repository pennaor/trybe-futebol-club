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

describe('Rotas de login', async function () {
  afterEach(async function () {
    sinon.restore();
  });

  it('a api deve responder com um token se passado credenciais de usuário válidas', async function () {
    sinon
      .stub(bcryptjs, 'compareSync')
      .returns(true);

    sinon
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
  });

  it('a api deve responder com o Id e role do usuário da requisição GET "/login/validate"', async function () {
    sinon
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
  });
});
