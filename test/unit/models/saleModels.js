const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Verifica se busca todas as vendas no banco de dados', () => {
  describe('Verifica se não existe venda', () => {
    const responseExecute = [[]];

    before(() => {
      sinon.stub(connection, 'execute').resolves(responseExecute);
    });

    after(() => {
      connection.execute.restore();
    });

    it('Verifica se retorna um array', async () => {
      const response = await salesModel.getAllSales();
      expect(response).to.be.empty;
    })
  });
}); 