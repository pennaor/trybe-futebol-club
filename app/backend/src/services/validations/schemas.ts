import Joi = require('joi');

const positiveInteger = Joi.number().integer().min(0);

const identifierSchema = positiveInteger.min(1).label('Id');

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
    homeTeamGoals: positiveInteger.required(),
    awayTeamGoals: positiveInteger.required(),
  }),
};

export {
  userSchemas,
  identifierSchema,
  matchSchemas,
};
