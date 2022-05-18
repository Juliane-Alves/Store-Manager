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
const editSales = async (saleId, arraySales) => {
  const id = await salesModel.getIdSales(saleId);
  // console.log(id);
    if (id.length === 0) throw message;
    await Promise.all(arraySales
      .map(({ quantity, productId }) => salesModel.editSales(saleId, productId, quantity)));

    return { saleId, itemUpdated: arraySales };
  };

  const newSale = async (data) => {
    const createSaleId = await salesModel.newSale();

    await Promise.all(data.map((sale) => salesModel
        .salesproducts(createSaleId, sale.productId, sale.quantity)));
    return {
        id: createSaleId,
        itemsSold: data,
    };
};

  const deleteSalesId = async (saleId) => {
    const salesId = await salesModel.getIdSales(saleId);
    if (salesId.length === 0) throw message;
    const deleteSale = await salesModel.deleteSalesId(saleId);
   return deleteSale;
  };
module.exports = {
    getAllSales,
    getIdSales,
    editSales, 
    deleteSalesId,
    newSale,
};
