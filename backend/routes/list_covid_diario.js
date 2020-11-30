const router = require('express').Router();
let Lista = require('../models/list_covid_diario.model');

router.route('/').get((req, res) => {

  const pageOptions = {
    page: parseInt(req.query.page) || 0,
    limit: parseInt(req.query.limit, 10) || 100000
}

Lista.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
});


module.exports = router;