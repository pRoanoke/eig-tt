const express = require('express');
const tradeController = require("../controllers/trades");
const router = express.Router();

router.post('/', tradeController.createTrade);
router.get('/', tradeController.getAllTrades);
router.get('/:id', tradeController.getTradeById);
router.delete('/:id', tradeController.methodNotAllowed);
router.put('/:id', tradeController.methodNotAllowed);
router.patch('/:id', tradeController.methodNotAllowed);

module.exports = router;
