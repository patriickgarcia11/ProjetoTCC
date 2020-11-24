const router = require('express').Router();
let Historico = require('../models/list_historico.model');



router.route('/').get((req, res) => {
  const pageOptions = {
    page: parseInt(req.query.page) || 0,
    limit: parseInt(req.query.limit, 10) || 1000
}



// Historico.find()
//     .skip(pageOptions.page * pageOptions.limit)
//     .limit(pageOptions.limit)
//     .exec(function (err, doc) {
//         if(err) { res.status(500).json(err); return; };
//         res.status(200).json(doc);
//     });
// });


Historico.aggregate([{"$group":{"_id":"$cidade", "casos": {"$max":"$casos"}}}])
    // .skip(pageOptions.page * pageOptions.limit)
    // .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
});

module.exports = router;