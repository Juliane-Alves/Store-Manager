const sinon = require("sinon");
const { expect } = require("chai");

const productModel = require('../../../models/productModel');
const productsService = require('../../../services/productService');

describe('Verifica se é inserido um novo produto do banco de dados', () => {
    describe('Verifica se busca todos os produtos de banco de dados', async () => {
        before(()=> {
          sinon.stub(productModel, 'getAllProducts').resolves([{id: 1, name:'flor', quantity:3}])
        })
        after(() => {
          productModel.getAllProducts.restore();
        })
      it('Verifica se retorna todos os produtos', async () => {
        const result = await productsService.getAllProducts();
        expect(result).to.be.a('array').to.have.lengthOf(1)
      });
    });
  });