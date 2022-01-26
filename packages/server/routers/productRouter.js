const {Router} = require('express');
const {productController} = require('./../controllers/index.js');
const {upload} = require('./../middleware');

const productRouter = Router();

productRouter.route('/').post(productController.createProduct)
.get(productController.getProducts);

productRouter
.route('/:productId')
.get(productController.getProductById)
.delete(productController.deleteProductById);

productRouter.patch('/:productId/images', upload.single('add_image'), productController.addImageById)

module.exports = productRouter;