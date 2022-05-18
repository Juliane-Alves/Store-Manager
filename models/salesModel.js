const connection = require('./connection');

const getAllSales = async () => {
    const query = `SELECT sa.id AS saleId, sa.date, spr.product_id AS productId, spr.quantity
     FROM StoreManager.sales AS sa 
     JOIN StoreManager.sales_products AS spr
     WHERE sa.id = spr.sale_id
     ORDER BY saleId, productId;`;

    const [sales] = await connection.execute(query);

    return sales;
};

const getIdSales = async (id) => {
    const query2 = ` SELECT sa.date, spr.product_id AS productId, spr.quantity
    FROM StoreManager.sales AS sa
    JOIN StoreManager.sales_products AS spr
    ON sa.id = spr.sale_id
    WHERE sa.id = ?
    ORDER BY sa.id, productId;`;

    const [sales] = await connection.execute(query2, [id]);

    return sales;
};

const editSales = async (id, productId, quantity) => {
   const query = `UPDATE sales_products SET product_id=?, quantity=? 
   WHERE sale_id=?`;

   await connection.execute(query, [productId, quantity, id]);

   return true;
};

const deleteSalesId = async (saleId) => {
    const query = `DELETE sa, sapr FROM sales AS sa
    JOIN sales_products AS sapr
    ON sa.id = sapr.sale_id
    WHERE sa.id = ?`;
    const [product] = await connection.execute(query, [saleId]);
    return product;
  };
  
module.exports = {
    getAllSales, 
    getIdSales,
    editSales, 
    deleteSalesId,
};
