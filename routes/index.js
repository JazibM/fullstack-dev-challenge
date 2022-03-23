var router = require('express').Router();

router.use('/calculator', require('./calculator'));

module.exports = router;