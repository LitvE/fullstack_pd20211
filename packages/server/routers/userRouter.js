const {Router} = require('express');
const {userController} = require('./../controllers/index.js');
const {validate} = require('./../middleware');
//const {upload} = require('./../middleware');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/:userId', userController.getUserById);
userRouter.get('/', userController.getUsers);
userRouter.delete('/:userId', userController.deleteUserById);
userRouter.patch('/:userId', userController.updateUserById);
/*
userRouter.patch('/:userId/photo', upload.single('add_image'), userController.addImageById)*/

module.exports = userRouter;