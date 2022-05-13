const productService = require('../services/productService');

const HTT_STATUS_OK = 200;
const ERROR_STATUS = 404;

const getAllProducts = async (_req, res) => {
    const products = await productService.getAllProducts();

    res.status(HTT_STATUS_OK).json(products);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const products = await productService.getId(id);

  if (products.length === 0) {
      return res.status(ERROR_STATUS).json({ message: 'Product not found' });
  }
  return res.status(HTT_STATUS_OK).json(products[0]);
}; 

module.exports = {
    getAllProducts,
    getId,
};