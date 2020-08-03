var express = require('express');
var router = express.Router();
const {
    readTrails
} = require('../../data/trails');

/* GET trails listing. */
router.get('/', async function(req, res, next) {
    const data = await readTrails();
    res.send(data);
});

module.exports = router;
