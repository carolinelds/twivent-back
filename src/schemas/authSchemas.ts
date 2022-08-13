import Joi from "joi";

const signup = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
});

const signin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const authSchemas = {
    signup,
    signin
};

export default authSchemas;