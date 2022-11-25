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

describe('Rotas GET de matches', async function () {
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
      .get('/matches?inProgress=false');
      
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

  it('POST "/matches" deve responder com status code 201 e match criada', async function () {
    const matchCreate = sinon
      .stub(Match, 'create')
      .resolves(matches.new as Match);

    const { id, inProgress , ...body } = matches.new;
    const response = await chai
      .request(app)
      .post('/matches')
      .send(body);
      
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.instanceOf(Object);

    expect(response.body).haveOwnProperty('id');
    expect(response.body.id).to.be.a('number');

    expect(response.body).haveOwnProperty('homeTeam');
    expect(response.body.homeTeam).to.be.a('number');

    expect(response.body).haveOwnProperty('homeTeamGoals');
    expect(response.body.homeTeamGoals).to.be.a('number');
    
    expect(response.body).haveOwnProperty('awayTeam');
    expect(response.body.awayTeam).to.be.a('number');

    expect(response.body).haveOwnProperty('awayTeamGoals');
    expect(response.body.awayTeamGoals).to.be.a('number');

    expect(response.body).haveOwnProperty('inProgress');
    expect(response.body.inProgress).to.be.a('boolean');

    matchCreate.restore();
  });

  it('PATCH "/matches/:id/finish" deve responder com status code 200 e mensagem "Finished"', async function () {
    const matchUpdate = sinon
      .stub(Match, 'update')
      .resolves();

    const match = matches.inProgress[0];

    const response = await chai
      .request(app)
      .patch(`/matches/${match.id}/finish`);
      
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.instanceOf(Object);

    expect(response.body).haveOwnProperty('message');
    expect(response.body.message).to.be.equal('Finished');

    matchUpdate.restore();
  });
});

