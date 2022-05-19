const sinon = require("sinon");
const { expect } = require("chai");

const connection = require('../../../models/connection');
const productModel =require('../../../models/productModel')

describe('Verifica novo produto no banco de dados', () => {
    describe('Verifica se o objeto é inserido com sucesso', () => {
      before(() => {
        sinon.stub(connection, 'execute').resolves([{id: 4, name:'flor', quantity:3}])
      })
      after(()=> {
        connection.execute.restore()
      })

      it('Verifica se retorna um objeto', async () => {
        const result = await productModel.createProducts('flor', 3);
        expect(result).to.be.a('object');
      });
  
      it('verifica se o objeto possui o "id" do novo produto', async () => {
        const result = await productModel.createProducts('flor', 3);
        expect(result).to.have.a.property('id');
      });
    })

  describe('Verifica se a getAllProducts é chamada', () => {
    const mock = [{id: 1, name: 'Flor', quantity: 2}]

    before(() => {
     sinon.stub(connection, 'execute').resolves([mock]);
    })
    after (()=> {
      connection.execute.restore();
    })
    it('Quando buscar por todos os produtos', async () => {
      const result = await productModel.getAllProducts()
      expect(result).to.be.a('array').to.have.lengthOf(1);
    })
    
  })
  
  }); 