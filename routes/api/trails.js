var express = require('express');
var router = express.Router();
const {
    readTrails,
    createTrail
} = require('../../data/trails');

/* GET trails listing. */
router.get('/', async function(req, res, next) {
    const data = await readTrails();
    res.send(data);
});

router.post('/', async function(req, res, next) {
    const body = req.body;
    const data = await createTrail(body);
    res.send(data);
})

module.exports = router;
