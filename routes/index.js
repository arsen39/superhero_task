
const { Router } = require('express');
const heroRouter = require('./hero');
const superpowerRouter = require('./superpower');


const router = Router();

router.use('/heroes', heroRouter);
router.use('/superpowers', superpowerRouter);


module.exports = router;