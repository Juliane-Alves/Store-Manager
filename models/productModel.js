const connection = require('./connection');

const getAllProducts = async () => {
    const query = 'SELECT * FROM StoreManager.products';

    const [products] = connection.execute(query);

    return products;
};

module.exports = {
    getAllProducts,
};