const router = require('express').Router();
let Lista = require('../models/list_covid_diario.model');



router.route('/').get((req, res) => {
//   Lista.find()
//     .then(listas => res.json(listas))
//     .catch(err => res.status(400).json('Error: ' + err));
  
  const pageOptions = {
    page: parseInt(req.query.page) || 0,
    limit: parseInt(req.query.limit, 10) || 10000
}

Lista.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec(function (err, doc) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(doc);
    });
});




// router.get('/', async(req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     // const limit = req.querry.page || 1;
//     const list = await Lista.paginate({}, {page});
//     res.json(list);
// });
























// router.route('/add').post((req, res) => {
//   const state = req.body.state;
//   const cidade = req.body.cidade;
//   const data = req.body.data;
//   const casos = req.body.casos;
//   const mortes = req.body.mortes;


//   const newlista = new Lista({
//     state,
//     cidade,
//     data,
//     casos,
//     mortes,

//   });

//   newlista.save()
//   .then(() => res.json(' Adicionado!'))
//   .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').get((req, res) => {
//   Lista.findById(req.params.id)
//     .then(lista => res.json(lista))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


// router.route('/update/:id').post((req, res) => {
//   Lista.findById(req.params.id)
//     .then(lista => {
//       lista.state = req.body.state;
//       lista.cidade = req.body.cidade;
//       lista.data = req.body.data;
//       lista.casos = req.body.casos;
//       lista.mortes = req.body.mortes;
      

//       lista.save()
//         .then(() => res.json(' updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;