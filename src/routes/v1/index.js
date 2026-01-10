const express = require("express");
const {cityController , flightController , airportController} = require('../../controllers/index');
const {FligthMiddlewares} = require('../../middlewares/index')
const router = express.Router();

router.post('/city', cityController.create);
router.get('/city/:id' , cityController.get);
router.patch('/city/:id' , cityController.update);
router.delete('/city/:id' , cityController.destroy);
router.get('/city', cityController.getAll);


router.post('/flights', FligthMiddlewares.validateCreateFlight , flightController.create);
router.get('/flights', flightController.getAll);
router.get('/flights/:id', flightController.get);
router.patch('/flights/:id',flightController.update);

router.post('/airports',airportController.create);

module.exports = router 