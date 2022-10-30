import router from "koa-joi-router";
const Joi = router.Joi;

const signUpBodyValidator = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  repeatPassword: Joi.string().required().equal(Joi.ref('password'))
}

const signInBodyValidator = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}

export {
  signUpBodyValidator,
  signInBodyValidator,
}