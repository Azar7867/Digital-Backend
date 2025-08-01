import Portfolio from '../models/Portfolio.js';

export const getPortfolio = async (req, res) => {
  try {
    const items = await Portfolio.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
