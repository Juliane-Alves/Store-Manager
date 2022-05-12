const productModel = require('../models/productModel');

const getAllProducts = async () => {
    const products = await productModel.getAllProducts();
  
    return products;
  };

const getId = async (id) => {
  const products = await productModel.getId(id);

  return products;
};

module.exports = {
    getAllProducts,
    getId, 
};