import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Match from './Match';

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'host' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'guest' });

Team.hasMany(Match);

export default Team;
