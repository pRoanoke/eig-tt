const Trade = require('../models/trade');

exports.createTrade = async (req, res) => {
  try {
    const { type, user_id, symbol, shares, price, timestamp } = req.body;
    if (shares < 1 || shares > 100 || (type !== 'buy' && type !== 'sell')) {
      return res.status(400).send('Invalid input');
    }
    const trade = await Trade.create({ type, user_id, symbol, shares, price, timestamp });
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTrades = async (req, res) => {
  try {
    const { type, user_id } = req.query;
    const query = {};
    if (type) query.type = type;
    if (user_id) query.user_id = user_id;

    const trades = await Trade.findAll({ where: query, order: [['id', 'ASC']] });
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTradeById = async (req, res) => {
  try {
    const trade = await Trade.findByPk(req.params.id);
    if (!trade) {
      return res.status(404).send('ID not found');
    }
    res.status(200).json(trade);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.methodNotAllowed = (req, res) => {
  res.status(405).send('Method Not Allowed');
};