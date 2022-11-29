import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
// @ts-ignore
import App from '../app';
import Team from '../database/models/Team';
import teams from './mocks/teams';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Rotas de teams', async function () {
  afterEach(async function () {
    sinon.restore();
  });

  it('GET "/teams" deve responder com status code 200 e array de times', async function () {
    sinon
      .stub(Team, 'findAll')
      .resolves(teams as Team[]);

    const response = await chai
      .request(app)
      .get('/teams')
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
    expect(response.body).to.have.length(teams.length);
    response.body.forEach((team: Team) => {
      expect(team).haveOwnProperty('id');
      expect(team.id).to.be.a('number');
      expect(team).haveOwnProperty('teamName');
      expect(team.teamName).to.be.a('string');
    });
  });

  it('GET "/teams/:id" deve responder com status code 200 e o time específico', async function () {
    const teamOne = teams[0];
    
    sinon
      .stub(Team, 'findByPk')
      .resolves(teamOne as Team);

    const response = await chai
      .request(app)
      .get(`/teams/${teamOne.id}`);
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Object);
    expect(response.body).haveOwnProperty('id');
    expect(response.body.id).to.be.equal(teamOne.id)
    expect(response.body).haveOwnProperty('teamName');
    expect(response.body.teamName).to.be.equal(teamOne.teamName);
  });
});
