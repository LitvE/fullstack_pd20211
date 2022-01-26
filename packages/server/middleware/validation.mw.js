const {NEW_USER_VS, UPDATE_USER_VS} = require('./../validation/user');
const createError = require('http-errors');

module.exports.validateNewUser = async(req, res, next) => {
    try{
        if(await NEW_USER_VS.validate(req.body)){
            return next();
        }else{
            next(createError(400, 'Validation Error'));
        }
    }catch(e){
        next(e);
    }
};

module.exports.validateUpdateUser = async(req, res, next) => {
    try{
        if(await UPDATE_USER_VS.validate(req.body)){
            return next();
        }else{
            next(createError(400, 'Validation Error'));
        }
    }catch(e){
        next(e);
    }
};