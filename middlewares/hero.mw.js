const { Hero } = require('../models');

module.exports.checkHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const heroInstance = await Hero.findByPk(id);

    if (!heroInstance) {
      throw new Error('Hero not found');
    }

    req.heroInstance = heroInstance;
    next();
  } catch (err) {
    next(err);
  }
};