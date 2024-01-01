const express = require('express');
const router = express.Router();
const procedureController = require('../controllers/procedureController');

router.post('/addProcedure',procedureController.addProcedure)

module.exports = router;