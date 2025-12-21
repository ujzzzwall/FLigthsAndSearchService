const express = require("express");
const {cityController , flightController} = require('../../controllers/index');

const router = express.Router();

router.post('/city', cityController.create);
router.get('/city/:id' , cityController.get);
router.patch('/city/:id' , cityController.update);
router.delete('/city/:id' , cityController.destroy);
router.get('/city', cityController.getAll);


router.post('/flights',flightController.create);
router.get('/flights', flightController.getAll);


module.exports = router 