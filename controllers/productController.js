const productService = require('../services/productService');

const HTT_STATUS_OK = 200;

const getAllProducts = async (_req, res) => {
    const products = productService.getAllProducts();

    res.status(HTT_STATUS_OK).json(products);
};

module.exports = {
    getAllProducts,
};