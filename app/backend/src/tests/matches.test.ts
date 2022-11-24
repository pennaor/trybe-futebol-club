import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
// @ts-ignore
import App from '../app';
import Match from '../database/models/Match';
import matches from './mocks/matches';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Rotas de matches', async function () {
  it('GET "/matches" deve responder com status code 200 e array das partidas', async function () {
    const matchFindAll = sinon
      .stub(Match, 'findAll')
      .resolves(matches.all as Match[]);

    const response = await chai
      .request(app)
      .get('/matches');
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
    expect(response.body).to.have.length(matches.all.length);
    
    response.body.forEach((match: Match) => {
      expect(match).haveOwnProperty('id');
      expect(match.id).to.be.a('number');

      expect(match).haveOwnProperty('homeTeam');
      expect(match.homeTeam).to.be.a('number');

      expect(match).haveOwnProperty('homeTeamGoals');
      expect(match.homeTeamGoals).to.be.a('number');
      
      expect(match).haveOwnProperty('awayTeam');
      expect(match.awayTeam).to.be.a('number');

      expect(match).haveOwnProperty('awayTeamGoals');
      expect(match.awayTeamGoals).to.be.a('number');

      expect(match).haveOwnProperty('inProgress');
      expect(match.inProgress).to.be.a('boolean');
    });

    matchFindAll.restore()
  });

  it('GET "/matches?inProgress=true" deve responder com status code 200 e array das partidas em andamento', async function () {
    const matchFindAll = sinon
      .stub(Match, 'findAll')
      .resolves(matches.inProgress as Match[]);

    const response = await chai
      .request(app)
      .get('/matches?inProgress=true');
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
    expect(response.body).to.have.length(matches.inProgress.length);
    
    response.body.forEach((match: Match) => {
      expect(match).haveOwnProperty('id');
      expect(match.id).to.be.a('number');

      expect(match).haveOwnProperty('homeTeam');
      expect(match.homeTeam).to.be.a('number');

      expect(match).haveOwnProperty('homeTeamGoals');
      expect(match.homeTeamGoals).to.be.a('number');
      
      expect(match).haveOwnProperty('awayTeam');
      expect(match.awayTeam).to.be.a('number');

      expect(match).haveOwnProperty('awayTeamGoals');
      expect(match.awayTeamGoals).to.be.a('number');

      expect(match).haveOwnProperty('inProgress');
      expect(match.inProgress).to.be.a('boolean');
    });

    matchFindAll.restore();
  });

  it('GET "/matches?inProgress=false" deve responder com status code 200 e array das partidas em andamento', async function () {
    const matchFindAll = sinon
      .stub(Match, 'findAll')
      .resolves(matches.finished as Match[]);

    const response = await chai
      .request(app)
      .get('/matches?inProgress=false');
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Array);
    expect(response.body).to.have.length(matches.finished.length);
    
    response.body.forEach((match: Match) => {
      expect(match).haveOwnProperty('id');
      expect(match.id).to.be.a('number');

      expect(match).haveOwnProperty('homeTeam');
      expect(match.homeTeam).to.be.a('number');

      expect(match).haveOwnProperty('homeTeamGoals');
      expect(match.homeTeamGoals).to.be.a('number');
      
      expect(match).haveOwnProperty('awayTeam');
      expect(match.awayTeam).to.be.a('number');

      expect(match).haveOwnProperty('awayTeamGoals');
      expect(match.awayTeamGoals).to.be.a('number');

      expect(match).haveOwnProperty('inProgress');
      expect(match.inProgress).to.be.a('boolean');
    });

    matchFindAll.restore();
  });
});
