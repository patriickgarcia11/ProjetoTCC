const router = require('express').Router();
let Feedback = require('../models/feedback.model');

router.route('/').get((req, res) => {
  Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  

  const newfeedback = new Feedback({
    username,
    email,
    description,
    date,
  });

  newfeedback.save()
  .then(() => res.json('Feedback Adicionado!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Feedback.findById(req.params.id)
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
  Feedback.findById(req.params.id)
    .then(feedback => {
      feedback.username = req.body.username;
      feedback.email = req.body.email;
      feedback.description = req.body.description;
      feedback.date = Date.parse(req.body.date);

      feedback.save()
        .then(() => res.json('Feedback updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;