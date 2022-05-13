const express = require('express');
const productsController = require('./controllers/productController');
const salesContoller = require('./controllers/salesController');
const errorMiddlware = require('./middlewares/erroMiddleware');

const app = express();

app.use(express.json());

// endpoint req 1 de produtos
app.get('/products', productsController.getAllProducts);

app.get('/products/:id', productsController.getId);

app.get('/sales', salesContoller.getAllSales);

app.get('/sales/:id', salesContoller.getIdSales);
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorMiddlware);
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
