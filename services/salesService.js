const salesModel = require('../models/salesModel');

const ERROR_STATUS = 404;
const message = { status: ERROR_STATUS, message: 'Sale not found' };

const getAllSales = async () => {
    const sales = await salesModel.getAllSales();
  
    return sales;
  };

const getIdSales = async (id) => {
  const sales = await salesModel.getIdSales(id);

  if (sales.length === 0) throw message;

  return sales;
};

module.exports = {
    getAllSales,
    getIdSales,
};
