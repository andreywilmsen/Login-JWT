const Joi = require("@hapi/joi");
const { schema } = require("../model/model");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(5).max(100),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(5).max(100),
  });
  return schema.validate(data);
};

const editValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string().required().min(3).max(50),
      email: Joi.string().required().min(5).max(100),
      password: Joi.string().required().min(5).max(100),

    });
    return schema.validate(data);
  };

module.exports = { registerValidation, loginValidation, editValidation };
