var express = require('express');
var router = express.Router();
const {
    readTrails,
    createTrail,
    deleteTrail
} = require('../../data/trails');

/* GET trails listing. */
router.get('/', async function(req, res, next) {
    const data = await readTrails();
    res.send(data);
});

// POST a trail
router.post('/', async function(req, res, next) {
    const body = req.body;
    const data = await createTrail(body);
    res.send(data);
})

// DELETE a trail
router.delete('/:id', async function(req, res, next) {
    const id = req.params.id;
    const data = await deleteTrail(id);
    res.send(data);
})

module.exports = router;
