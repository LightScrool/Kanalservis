const db = require('./db');

class Controller {
    async getItems(request, response) {
        const items = await db.query('SELECT * FROM items');
        response.json(items.rows);
    }
}

module.exports = new Controller();
