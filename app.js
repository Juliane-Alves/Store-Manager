const express = require('express');
const productsController = require('./controllers/productController');
const salesContoller = require('./controllers/salesController');
const errorMiddlware = require('./middlewares/erroMiddleware');
const productValidation = require('./middlewares/validadeProduct');
const saleValidation = require('./middlewares/validadeSales');

const app = express();

app.use(express.json());

// endpoint req 1 de produtos e sales
app.get('/products', productsController.getAllProducts);

app.get('/products/:id', productsController.getId);

app.get('/sales', salesContoller.getAllSales);

app.get('/sales/:id', salesContoller.getIdSales);

// validação requisito 3 e 4  
app.post('/products', productValidation, productsController.createProducts);

app.put('/products/:id', productValidation, productsController.editProducts);

app.post('/sales', saleValidation);

app.put('sales/:id', saleValidation);

// endpoint requisito 6 
app.delete('/products/:id', productsController.deleteProducts);
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddlware);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
