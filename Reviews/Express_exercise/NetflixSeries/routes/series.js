var express = require('express');
var router = express.Router();
var seriesController = require('../controller/seriesController');


/* GET ALL SERIES */
router.get('/',seriesController.getAllSeries)

/* Find A SERIES */
router.get('/:seriesID',seriesController.findSeriesByID)

/* POST A SERIES */
router.post('/',seriesController.createSeries)

/* UPDATE A SERIES */
router.put('/:seriesID',seriesController.updateSeriesById)

/* DELETE A SERIES */
router.delete('/:seriesID',seriesController.deleteSeriesById)

module.exports = router;
