const Boat = require('../models/boat.model');
const router = require('express').Router();

router.route('/new/:id').post((req, res)=>{
    console.log("Attempting to add Log to Boat")
    console.log(req.body)
    Boat.updateOne({
                  _id: req.params.id
                }, {
                  $addToSet: {
                    logs: req.body
                  }
                }).then(boat => res.json(boat))
                .catch(err => res.status(400).json('Error! ' + err))
});

// router.route('/overhaul/:id').put((req, res)=>{
//     console.log("Attempting to add an overhaul date to a Boat")
//         Boat.updateOne({
//             _id: req.params.id
//           }, {
//             $addToSet: {
//                overhaulDates: req.body.date
//             }
//           }).then(boat => res.json(boat))
//           .catch(err => res.status(400).json('Error! ' + err))
//  })


// router.route('/company/:id').put((req, res)=>{
//     console.log("Attempting to add a Company to a Boat")
//         Boat.updateOne({
//             _id: req.params.id
//           }, {
//             $addToSet: {
//               owners: req.body
//             }
//           }).then(boat => res.json(boat))
//           .catch(err => res.status(400).json('Error! ' + err))
//  })

module.exports = router;
