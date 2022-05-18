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

const getByName = async (name) => {
    const query = 'SELECT * FROM StoreManager.products WHERE products.name = ?';
    const [products] = await connection.execute(query, [name]);
  
    return products;
  };

const createProducts = async (name, quantity) => {
    const query = `
    INSERT INTO products (name, quantity)
    VALUES (?, ?)`;

    const [result] = await connection.execute(query, [name, quantity]);

    const newProduct = {
        id: result.insertId,
        name,
        quantity,
      };
      return newProduct;
};

const editProducts = async (id, name, quantity) => {
    const query = 'UPDATE products SET name=?, quantity=? WHERE id=? ';

    await connection.execute(query, [id, name, quantity]);

    return ({
        id,
        name,
        quantity,
      });
};

const deleteProducts = async (id) => {
   const query = 'DELETE FROM products WHERE id=?';

   await connection.execute(query, [id]);
};

module.exports = {
    getAllProducts,
    getId,
    getByName,
    createProducts,
    editProducts,
    deleteProducts,
};