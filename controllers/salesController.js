const salesService = require('../services/salesService');

const HTT_STATUS_OK = 200;
// const ERROR_STATUS = 404;

const getAllSales = async (_req, res) => {
    const sales = await salesService.getAllSales();
 
    res.status(HTT_STATUS_OK).json(sales);
};

const getIdSales = async (req, res, next) => {
    try {
        const { id } = req.params;

      const sales = await salesService.getIdSales(id);

      return res.status(HTT_STATUS_OK).json(sales);
    } catch (error) {
        next(error);
    //  return error.message;
    }
};

const editSales = async (req, res, next) => {
    try {
      const arraySales = req.body;
      const { id } = req.params;
      const sales = await salesService.editSales(id, arraySales);
      return res.status(HTT_STATUS_OK).json(sales);
    } catch (error) {
      next(error);
    }
  };
  const newSale = async (req, res, _next) => {
    const data = req.body;
    const newSales = await salesService.newSale(data);
    return res.status(201).json(newSales);
};

  const deleteSalesId = async (req, res, next) => {
    try {
      const { id } = req.params;
      await salesService.deleteSalesId(id);
     return res.status(204).send();
    } catch (error) {
    next(error);
    }
  };
  
module.exports = {
    getAllSales,
    getIdSales,
    editSales,
    deleteSalesId,
    newSale,
};

// cometario pra novo push 