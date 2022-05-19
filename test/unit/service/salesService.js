const sinon = require("sinon");
const { expect } = require("chai");

const salesService = require('../../../services/salesService');
const salesModal = require('../../../models/salesModel');

describe('Verifica a camada Service de sales', () => {
    describe('Verifica a busca de todas as vendas', () => {
      before(() => {
        sinon.stub(salesModal, 'getAllSales').resolves([{
            saleId: 1, date: '2022-05-08 19:50:14', productI: 1, quantity: 2}]);
      }) 
      after(() => {
        salesModal.getAllSales.restore()
      })
      it('Verifica se o retorno é um array', async ()=> {
        const result = await salesService.getAllSales();
        expect(result).to.be.a('array').to.have.lengthOf(1);
      })
    })
    describe('Verifica a busca de todas as vendas pelo id', () => {
        before(() => {
          sinon.stub(salesModal, 'getIdSales').resolves([[{
              saleId: 1, date: '2022-05-08 19:50:14', productI: 1, quantity: 2}]]);
        }) 
        after(() => {
          salesModal.getIdSales.restore()
        })
        it('Verifica se o retorno é um array', async ()=> {
          const result = await salesService.getIdSales(1);
          expect(result).to.be.a('array').to.have.lengthOf(1);
        })
      })
})