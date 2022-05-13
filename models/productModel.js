const connection = require('./connection');

const getAllProducts = async () => {
    const query = 'SELECT * FROM StoreManager.products';

    const [products] = await connection.execute(query);

    return products;
};

const getId = async (id) => {
 const query = 'SELECT * FROM StoreManager.products WHERE id = ?';

 const [products] = await connection.execute(query, [id]);

 return products;
};

module.exports = {
    getAllProducts,
    getId,
};