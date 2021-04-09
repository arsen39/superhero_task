const createError = require('http-errors');
const { Hero, Superpower, Image } = require('../models');

module.exports.createHero = async (req, res, next) => {
  try {
    const { body, files } = req;
    
    res.status(201).send({body, files});
  } catch (err) {
    next(err);
  }
};

module.exports.getHero = async (req, res, next) => {
  try {
    const {params: {id}} = req;

    const hero = await Hero.findByPk(id);

    if (!hero) {
      const err = createError(404, 'Hero not found');
      return next(err);
    }

    res.send(hero);
  } catch (err) {
    next(err);
  }
};

module.exports.addHeroSP = async (req, res, next) => {
  try {
     const {params: {id}, body:{powerId}} = req;

    const hero = await Hero.findByPk(id);
    const sp = await Superpower.findByPk(powerId);

    if (!hero || !sp) {
      const err = createError(404, 'Not found');
      return next(err);
    }

    hero.addSuperpowers(sp);

    res.send();
  } catch (err) {
    next(err);
  }
};

module.exports.getHeroWithSP = async (req, res, next) => {
  try {
    const {params: {id}} = req;

    const hero = await Hero.findByPk(id);

    if (!hero) {
      const err = createError(404, 'Hero not found');
      return next(err);
    }

    const sp = await hero.getSuperpowers();

    res.send({hero, sp});
  } catch (err) {
    next(err);
  }
};

module.exports.getAllHeroes = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const heroes = await Hero.findAll({
      ...pagination,
    });

    if (!heroes.length) {
      return next(createError(404, 'Users not found'));
    }

    res.send({ data: heroes});
  } catch (err) {
    next(err);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {params: {id}, body} = req;

    const [rowsCount, [updatedHero]] = await Hero.update(body, {
      where: { id },
      returning: true,
    });

    if (rowsCount !== 1) {
      return next(createError(404, 'Hero not found'));
    }

    res.send({ data: updatedHero });
  } catch (err) {
    next(err);
  }
};



module.exports.deleteHero = async (req, res, next) => {
  try {
    const {params: {id}} = req;

    const hero = await Hero.findByPk(id);

    if (!hero) {
      const err = createError(404, 'Hero not found');
      return next(err);
    }

    const rowsCount = await Hero.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Hero not found'));
    }

    res.send({ data: hero });
  } catch (err) {
    next(err);
  }
};