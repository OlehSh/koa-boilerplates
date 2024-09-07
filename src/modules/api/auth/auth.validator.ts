import Joi, { Schema } from 'joi';

const signUpBodySchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  repeatPassword: Joi.string().required().equal(Joi.ref('password'))
});

const signInBodySchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export {
  signUpBodySchema,
  signInBodySchema,
}