const router = require('express').Router();
let Lista = require('../models/list_previsoes.model');



router.route('/').get((req, res) => {
//   Lista.find()
//     .then(listas => res.json(listas))
//     .catch(err => res.status(400).json('Error: ' + err));
  
  const pageOptions = {
    page: parseInt(req.query.page) || 0,
    limit: parseInt(req.query.limit, 7) || 7
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