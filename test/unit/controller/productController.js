const sinon = require("sinon");
const { expect } = require("chai");

const productService = require('../../../services/productService')
const productController = require('../../../controllers/productController')
// const createProducts = require('../../../controllers/productController');

describe('Verifica se o controller createProducts é chamado', () => {
  describe('verifica se o payload não é valido', async () => {
    const req = {};
    const res = {};

    before(() => {
      req.body = {
        name: 'Flor de plastico',
        quantity: 2
      };

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();

      sinon.stub(productService, 'createProducts').resolves(false);
    });

    after(() => {
      productService.createProducts.restore();
    });

    //it('Verifica se é chamado o status http 409', async () => {
      //await productController.createProducts(req, res);
     // expect(res.status.calledWith(409)).to.be.equal(true);
    //});
  });
}); 