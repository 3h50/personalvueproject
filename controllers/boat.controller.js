const Boat = require('../models/boat.model');
const router = require('express').Router();

router.route('/new').post((req, res)=>{
    console.log("Attempting to add Boat")
    const newBoat = new Boat(req.body);
    newBoat.save()
        .then(boat=>res.json(boat))
        .catch(err=>res.status(400).json("Error!" + err))
});

router.route('/').get((req, res) => {
    // using .find() without a parameter will match on all user instances
    Boat.find()
        .then(allBoats => res.json(allBoats))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/update/:id').put((req, res) => {
    Boat.findByIdAndUpdate(req.params.id, req.body)
        .then(boat => res.json('Success! Boat updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/overhaul/:id').put((req, res)=>{
    console.log("Attempting to add an overhaul date to a Boat")
        Boat.updateOne({
            _id: req.params.id
          }, {
            $addToSet: {
               overhaulDates: req.body.date
            }
          }).then(boat => res.json(boat))
          .catch(err => res.status(400).json('Error! ' + err))
 })


router.route('/company/:id').put((req, res)=>{
    console.log("Attempting to add a Company to a Boat")
        Boat.updateOne({
            _id: req.params.id
          }, {
            $addToSet: {
              owners: req.body
            }
          }).then(boat => res.json(boat))
          .catch(err => res.status(400).json('Error! ' + err))
 })

module.exports = router;
