const { Router } = require('express');
const heroController = require('../controllers/hero.controller');
const paginate = require('../middlewares/paginate.mw');
// const paginate = require('../middlewares/paginate.mw');

const heroRouter = Router();

heroRouter.post('/create', heroController.createHero);
heroRouter.get('/get/:id', heroController.getHero);
heroRouter.get('/getAll', heroController.getAllHeroes);
heroRouter.delete('/delete/:id', heroController.deleteHero);
heroRouter.patch('/update/:id', heroController.updateHero);

module.exports = heroRouter;