const Router = require('express');
const itemsController = require('./controller');

const router = new Router();

router.get('/', itemsController.getItems);

module.exports = router;
