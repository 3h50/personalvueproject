const Boat = require('../models/boat.model');
const router = require('express').Router();

router.route('/new').post((req, res) => {
  console.log("Attempting to add Boat")
  const newBoat = new Boat(req.body);
  newBoat.save()
    .then(boat => res.json(boat))
    .catch(err => res.status(400).json("Error!" + err))
});

router.route('/').get((req, res) => {
  // using .find() without a parameter will match on all user instances
  Boat.find({}, "-serial -overhaulDate -owners -companies")
    .then(allBoats => res.json(allBoats))
    .catch(err => {
      res.status(400).json('Error! ' + err)
      console.log(err)
    })
})

router.route('/:id').put((req, res) => {
  Boat.findByIdAndUpdate(req.params.id, req.body)
    .then(boat => res.json('Success! Boat updated.'))
    .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/:id').get((req, res) => {
  Boat.findById(req.params.id, req.body)
    .then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
})


//POST AN OVERHAUL DATE
router.route('/overhaul/:id').post((req, res) => {
  console.log("Attempting to add an overhaul date to a Boat");
  const filter = {
    _id: req.params.id,
  }
  const action = {
    $addToSet: {
      overhaulDates: req.body.date
    }
  }
  const options = {
    new: true
  }
  Boat.updateOne(filter, action, options).then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
})

// UPDATE A COMPANY MANTAINER OF BOAT
router.route('/company/:id').put((req, res) => {
  console.log("Attempting to add a Company to a Boat");
  const filter = {
    _id: req.params.id,
  }
  const action = {
    $addToSet: {
      owners: req.body
    }
  }
  const options = {
    new: true
  }
  Boat.updateOne(filter, action, options).then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router;
