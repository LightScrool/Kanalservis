const Router = require('express');
const itemsController = require('./controller');

const router = new Router();

router.get('/items', itemsController.getItems);
router.get('/quantity', itemsController.getItemsQuantity);

module.exports = router;
