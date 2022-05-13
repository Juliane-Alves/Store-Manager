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

module.exports = {
    getAllSales,
    getIdSales,
};
