import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
// @ts-ignore
import bcryptjs = require('bcryptjs');

import App from '../app';
import User from '../database/models/User';

import { tokenLength, validCredentials, user } from './mocks/user';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Rota de login', () => {
  before(async () => {
    sinon
      .stub(User, 'findOne')
      .resolves({ dataValues: { ...user } } as User);
  });

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('a api deve responder com token se passado credenciais válidas', async () => {
    sinon
      .stub(bcryptjs, 'compareSync')
      .returns(true)

    const response = await chai
      .request(app)
      .post('/login')
      .send(validCredentials.user);
    expect(response.status).to.be.equal(200);    
    expect(response.body).to.haveOwnProperty('token');    
    expect(response.body.token).to.be.a('string');    
    expect(response.body.token).to.have.length(tokenLength);
  });
});
