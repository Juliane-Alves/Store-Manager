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

module.exports = {
    getAllSales, 
    getIdSales,
};
