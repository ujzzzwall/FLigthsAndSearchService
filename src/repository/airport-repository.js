const CrudRepository = require('./crud-reposiotry');
const { Airport } = require('../models/index')


class AirportRepository extends CrudRepository {
  constructor(){
    super(Airport);
  }
}

module.exports = AirportRepository;