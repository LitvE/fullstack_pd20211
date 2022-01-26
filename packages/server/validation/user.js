const yup = require('yup');

const RGP_NAME = /^[A-Z][a-z]{1-40}$/;
const NAME_VS = yup.string().matches(RGP_NAME);

module.exports.NEW_USER_VS = yup.object().shape({
    firstName: NAME_VS.required(),
    lastName: NAME_VS.required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

module.exports.UPDATE_USER_VS = yup.object().shape({
    firstName: NAME_VS,
    lastName: NAME_VS,
    email: yup.string().email(),
    password: yup.string(),
});
