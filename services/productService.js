const productModel = require('../models/productModel');

const getAllProducts = async () => {
    const products = await productModel.getAllProducts();
  
    return products;
  };

const getId = async (id) => {
  const products = await productModel.getId(id);

  return products;
}; 

const createProducts = async (name, quantity) => {
  const productName = await productModel.getByName(name);

  if (productName.length > 0) {
    throw new Error('Product already exists');
  }
  const newProducts = await productModel.createProducts(name, quantity);

  return newProducts;
};

module.exports = {
    getAllProducts,
    getId, 
    createProducts,
};