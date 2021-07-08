const express = require('express');
const router = express.Router();
const obsoController = require('../controller/obso');

router.post('/obso', obsoController.search);


module.exports = router;