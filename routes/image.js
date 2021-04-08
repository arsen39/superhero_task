const { Router } = require('express');
const path = require('path')
const imageController = require('../controllers/image.controller');
const multer = require('multer');

const imageRouter = Router();
const upload = multer({dest: path.resolve(__dirname, '../public/images')});

imageRouter.post('/add', upload.single('image'), imageController.addImgToHero);

module.exports = imageRouter;