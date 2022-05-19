const sinon = require("sinon");
const { expect } = require("chai");

const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

describe('Verifica a camada Controller de sales', () => {
    describe('Verifica a busca de todas as vendas', () => {
        const req = {};
        const res = {};
      before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
        sinon.stub(salesService, 'getAllSales').resolves([{
            saleId: 1, date: '2022-05-08 19:50:14', productI: 1, quantity: 2}]);
      }) 
      after(() => {
        salesService.getAllSales.restore()
      })
      it('Verifica se o retorno é status 200', async ()=> {
           await salesController.getAllSales(req, res);
        expect(res.status.calledWith(200)).to.be.true
      })
      it('Verifica se o retorno é um array', async ()=> {
         await salesController.getAllSales(req, res);
        expect(res.json.calledWith(sinon.match.array)).to.be.true;
      })
    })
    describe('Verifica a busca de todas as vendas pelo id', () => {
        const req = {};
        const res = {};
        
        before(() => {
            req.params = {id: 1}
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon.stub(salesService, 'getIdSales').resolves([{
              saleId: 1, date: '2022-05-08 19:50:14', productI: 1, quantity: 2}]);
        }) 
        after(() => {
          salesService.getIdSales.restore()
        })
        it('Verifica se o retorno é status 200', async ()=> {
            await salesController.getIdSales(req, res);
         expect(res.status.calledWith(200)).to.be.true
       })
       it('Verifica se o retorno é um array', async ()=> {
          await salesController.getIdSales(req, res);
         expect(res.json.calledWith(sinon.match.array)).to.be.true;
       })
      })
})