const { Router } = require('express');
const superpowerController = require('../controllers/superpower.controller');
const paginate = require('../middlewares/paginate.mw');

const superpowerRouter = Router();

superpowerRouter.post('/create', superpowerController.createSuperpower);
superpowerRouter.get('/get/:id', superpowerController.getSuperpower);
superpowerRouter.get('/getAll', paginate, superpowerController.getAllSuperpowers);
superpowerRouter.delete('/delete/:id', superpowerController.deleteSuperpower);
superpowerRouter.patch('/update/:id', superpowerController.updateSuperpower);

module.exports = superpowerRouter;