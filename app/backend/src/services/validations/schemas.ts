import Joi = require('joi');

const identifierSchema = Joi.number().integer().min(1).label('Id');

const userSchemas = {
  credentials: Joi.object({
    email: Joi.string().min(1).required(),
    password: Joi.string().min(1).required(),
  }),
};

const matchSchemas = {
  onCreate: Joi.object({
    homeTeam: identifierSchema.required(),
    awayTeam: identifierSchema.required().invalid(Joi.ref('homeTeam')),
    homeTeamGoals: identifierSchema.required(),
    awayTeamGoals: identifierSchema.required(),
  }),
};

export {
  userSchemas,
  identifierSchema,
  matchSchemas,
};
