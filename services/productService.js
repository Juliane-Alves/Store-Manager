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

const editProducts = async (id, name, quantity) => {
    const consulterId = await productModel.getId(id);
    if (consulterId.length === 0) {
      throw new Error('Product not found');
    }
    const alterProduct = await productModel.editProducts(id, name, quantity);
    return alterProduct; 
};

const deleteProducts = async (id) => {
  const consulterId = await productModel.getId(id);
  if (consulterId.length === 0) {
    throw new Error('Product not found');
  }

  const deleteP = await productModel.deleteProducts(id);

  return deleteP;
};

module.exports = {
    getAllProducts,
    getId, 
    createProducts,
    editProducts,
    deleteProducts,
};