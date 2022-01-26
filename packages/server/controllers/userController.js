const { User}  = require('./../models')

//id???? req.params.userId

module.exports.createUser = async (req, res, next) =>{
    try{
        const newUser = await User.create(req.body);
        if(newUser){
            //const userToSend = _.omit(newUser.get(), ['password', 'createdAt', 'updatedAt']);
            return res.status(201).send(newUser);
        }
        return next(new Error());

    }catch(e){
        //console.log('Create error');
        next(e);
    }
}

module.exports.getUserById = async (req, res, next) =>{
    //findByPk
    try{
        const userToFind = await User.findByPk(req.params.userId, {
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt'],
            },
        });

        if (userToFind) {
            return res.status(201).send(userToFind);
        }
        return next(new Error());
    }catch(e){
        //console.log('Get error');
        next(e);
    }
}
/*
module.exports.getUsers = async (req, res, next) => {
    //findAll
    try{
        const foundUsers = await User.findAll({
            raw: true,
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt'],
            },
            limit: 5,
        });

        if (foundUsers) {
            return res.status(201).send({data: foundUsers});
        }
        return next(new Error());
    }catch(e){
        //console.log('Get error');
        next(e);
    }
}*/

module.exports.getUsers = async (req, res, next) => {
    try {
      const foundUsers = await User.findAll({
        raw: true,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
          //exclude: ['id', 'createdAt', 'updatedAt', 'passwordHash'],
        },
        limit: 5,
      });
      // запаковка массива в поле обьекта data
      res.status(200).send({ data: foundUsers });
    } catch (e) {
      next(e);
    }
  };

module.exports.deleteUserById = async (req, res, next) => {
    //destroy
    try{
        const userToDelete = await User.destroy({
            where: {
                id: req.params.userId,
            }
        });
        if (userToDelete) {
            return res.status(201).send(userToDelete);
        }
        return next(new Error());
    } catch(e){
        //console.log('Delete error');
        next(e);
    }
}

module.exports.updateUserById = async (req, res, next) => {
    try {
        const [updRowsCount, updRows] = await User.update(req.body, {
          where: {
            id: req.params.userId,
          },
          returning: true,
        });
        if (updRowsCount) {
          const data = updRows.get();
          delete data.password;
          return res.status(201).send(data);
        }
        return next(new Error());
      } catch (e) {
        //console.log('Update error');
        next(e);
      }
}