const { Product } = require('./../models');

module.exports.createProduct = async (req, res, next) => {
  const { body } = req;
  try {
    const createdProduct = await Product.create(body);
    if (createdProduct) {
      return res.status(201).send({ data: createdProduct });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};

module.exports.addImageById = async (req, res, next) => {
  const {
    file,
    params: { productId },
  } = req;
  try {
    const updProduct = await Product.findByPk(productId);
    if (updProduct) {
      updProduct.images.push(file.filename);
      const [updRowCount, [updFoundProducts]] = await Product.update(
        updProduct.get(),
        { where: { id: productId }, returning: true }
      );
      return res.status(200).send({ data: updFoundProducts });
    }
    res.status(404).send('Product not found');
  } catch (err) {
    next(err);
  }
};

module.exports.getProducts = async (req, res, next) => {
  try {
    const foundProducts = await Product.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      //limit: 10,
    });
    // запаковка массива Продуктов в поле обьекта data
    res.status(200).send({ data: foundProducts });
  } catch (e) {
    next(e);
  }
};

module.exports.getProductById = async (req, res, next) => {
  try {
    const foundProduct = await Product.findByPk(req.params.productId, {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (foundProduct) {
        return res.status(200).send({ data: foundProduct });
    }
    res.status(404).send('Product not found');
  } catch (e) {
    next(e);
  }
};

module.exports.deleteProductById = async (req, res, next) => {
  try {
    const productToDelete = await Product.destroy({
        where: {
            id: req.params.productId,
        }
    });
    if(productToDelete){
        return res.send(`Product with id ${req.params.productId} was deleted`);
    } 
    res.status(404).send('Product was not deleted');
  } catch (e) {
    next(e);
  }
};