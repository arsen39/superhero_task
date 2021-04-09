const { Router } = require('express');
const path = require('path')
const heroController = require('../controllers/hero.controller');
const paginate = require('../middlewares/paginate.mw');
const multer = require('multer');
const upload = multer({dest: path.resolve(__dirname, '../public/images')});

const heroRouter = Router();

heroRouter.post('/add', upload.any(), heroController.createHero);
heroRouter.get('/get/:id', heroController.getHero);
heroRouter.get('/getWithSP/:id', heroController.getHeroWithSP);
heroRouter.get('/getAll', heroController.getAllHeroes);
heroRouter.delete('/delete/:id', heroController.deleteHero);
heroRouter.patch('/update/:id', heroController.updateHero);
heroRouter.patch('/addSP/:id', heroController.addHeroSP);

module.exports = heroRouter;