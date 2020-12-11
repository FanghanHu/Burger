const router = require('express').Router();
const Burger = require('../models/burger');

router.get('/', (req, res) => {
    Burger.selectAll().then(results => {
        res.render('index', {data: results});
    }).catch(err => {
        console.error(err);
        res.status(500).end();
    });
});

router.post('/api/add', (req, res) => {
    let burger = new Burger(undefined, req.body.burger_name, false);
    burger.insert().then(() => {
        res.redirect('/');
    }).catch(err => {
        console.error(err);
        res.status(500).end();
    });
});

router.put('/api/devour/:id', (req, res) => {
    Burger.devour(req.params.id).then(()=> {
        res.end();
    }).catch(err => {
        console.error(err);
        res.status(500).end();
    });
});


module.exports = router;