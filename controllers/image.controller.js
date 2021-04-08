const createError = require('http-errors');
const { Hero, Superpower, Image } = require('../models');

module.exports.addImgToHero = async (req, res, next) => {
  try {
    const {body, file: {filename}} = req;
    
    const createdImg = await Image.create({name: filename, heroId: body.heroId});
    
    const hero = await Hero.findByPk(body.heroId,{include:{model: Image}});
    
    if (!hero || !createdImg) {
      const err = createError(404, 'Not found');
      return next(err);
    }

    res.send(hero)
  } catch (err) {
    next(err);
  }
};