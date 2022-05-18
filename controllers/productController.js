const productService = require('../services/productService');

const HTT_STATUS_OK = 200;
const ERROR_STATUS = 404;
const HTTP_RES_SUCESS = 201;
const HTTP_CONFLIT = 409;
const HTTP_SUCESS = 204;

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

const createProducts = async (req, res) => {
 try {
    const { name, quantity } = req.body;  

    const product = await productService.createProducts(name, quantity);
    return res.status(HTTP_RES_SUCESS).json(product);
 } catch (error) {
    return res.status(HTTP_CONFLIT).json({ message: error.message });
 }
};

const editProducts = async (req, res) => {
    try {
      const { name, quantity } = req.body;
      const { id } = req.params;
  
      const product = await productService.editProducts(id, name, quantity);
      return res.status(HTT_STATUS_OK).json(product);
    } catch (error) {
      return res.status(ERROR_STATUS).json({ message: error.message });
    }
  };

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.deleteProducts(id);
    
    return res.status(HTTP_SUCESS).json(product);
  } catch (error) {
    return res.status(ERROR_STATUS).json({ message: error.message });
  }
};

module.exports = {
    getAllProducts,
    getId,
    createProducts,
    editProducts, 
    deleteProducts,
};