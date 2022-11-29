import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
// @ts-ignore
import App from '../app';
import Team from '../database/models/Team';
import teamsAndMatches from './mocks/teamsAndMatches';
import leaderBoard from './mocks/leaderBoard';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;


describe('Rotas de LeaderBoard', async function () {
  afterEach(async function () {
    sinon.restore();
  });

  it('GET "/leaderboard/home" deve responder com status code 200 e array da classificação dos times de acordo com partidas jogadas em casa', async function () {
    sinon
      .stub(Team, 'findAll')
      .resolves(<unknown> teamsAndMatches.homeMatches as Team[]);

    const response = await chai
      .request(app)
      .get('/leaderboard/home');
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(leaderBoard.homeRank);
  });

  it('GET "/leaderboard/away" deve responder com status code 200 e array da classificação dos times de acordo com partidas jogadas fora', async function () {
    sinon
      .stub(Team, 'findAll')
      .resolves(<unknown> teamsAndMatches.awayMatches as Team[]);

    const response = await chai
      .request(app)
      .get('/leaderboard/away');
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(leaderBoard.awayRank);
  });

  it('GET "/leaderboard" deve responder com status code 200 e array da classificação dos times de acordo com todas partidas jogadas', async function () {
    sinon
      .stub(Team, 'findAll')
      .resolves(<unknown> teamsAndMatches.allMatches as Team[]);

    const response = await chai
      .request(app)
      .get('/leaderboard');  
    
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(leaderBoard.allRank);
  });
});

