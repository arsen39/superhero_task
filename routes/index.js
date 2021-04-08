
const { Router } = require('express');
const heroRouter = require('./hero');
const superpowerRouter = require('./superpower');
const imageRouter = require('./image')


const router = Router();

router.use('/heroes', heroRouter);
router.use('/superpowers', superpowerRouter);
router.use('/images', imageRouter)


module.exports = router;