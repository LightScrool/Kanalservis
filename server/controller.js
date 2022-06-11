const db = require('./db');

class Controller {
    async getItems(request, response) {
        const items = await db.query('SELECT * FROM items');
        response.json(items.rows);
    }

    async getItemsQuantity(request, response) {
        const items = await db.query('SELECT COUNT(*) FROM items');
        response.json(Number(items.rows[0]["count"]));
    }
}

module.exports = new Controller();
