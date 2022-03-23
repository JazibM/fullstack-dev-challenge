var router = require('express').Router();
router.post('/savings', function (req, res, next) {
    const { initial, monthly, rate } = req.body
    if (initial == null || monthly == null || rate == null) {
        res.status(400).send()
    }
    else {
        const projectionLength = 50

        const data = [];
        let previousYearValue = initial;
        for (var year = 1; year <= projectionLength; year++) {
            value = ((monthly * ((Math.pow(1 + rate, 12) - 1) / rate)) + (previousYearValue * Math.pow((1 + rate), 12))) || 0
            data.push({ year, value })
            previousYearValue = value
        }
        res.send({ data })
    }
});

module.exports = router