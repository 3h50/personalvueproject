const Boat = require('../models/boat.model');
const router = require('express').Router();

router.route('/:id').post((req, res)=>{
    console.log("Attempting to add Log to Boat")
    Boat.updateOne({
                  _id: req.params.id
                }, {
                  $addToSet: {
                    logs: req.body
                  }
                }).then(boat => res.json(boat))
                .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/:id').delete((req, res)=>{
  console.log("Attempting to remove a Log from Boat")
  Boat.updateOne(
    {_id: req.params.id},
    { $pull: {logs : { _id: req.body.logID} }}, {new: true}
              ).then(boat => res.json(boat))
              .catch(err => res.status(400).json('Error! ' + err))
});

// add something here to remove from wasabi bucket
// router.route('/photos/:id').delete((req, res)=>{
//   console.log("Attempting to remove a Log from Boat")
//   console.log(req.body)
//   Boat.updateOne(
//     {_id: req.params.id},
//     { $pull: { logs : { _id: req.body.photoID} }}, {new: true}
//               ).then(boat => res.json(boat))
//               .catch(err => res.status(400).json('Error! ' + err))
// });

router.route('/photos/:id').delete((req, res)=>{
  console.log("Attempting to remove a photo from a Log from a Boat")
  console.log(req.body)
  Boat.updateOne(
        {_id: req.params.id},
        {$pull: {
          "logs.$[].photos":{_id : req.body.photoID} }},
        { new: true }
      )
      .then(boat => res.json(boat))
      .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/photos/:id').post((req, res)=>{
  console.log("Attempting to add photo to a Log to a Boat")
  console.log(req.body)
  Boat.updateOne({
                _id: req.params.id,
                "logs._id": req.body.logID
              }, {
                $addToSet: {
                  "logs.$[].photos": req.body.photo
                }
              }).then(boat => res.json(boat))
              .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/photos/:id').put((req, res)=>{
  console.log("Attempting to add photo to a Log to a Boat")
  console.log(req.body)
  Boat.updateOne({
                _id: req.params.id,
                "logs._id": req.body.logID
              }, {
                $addToSet: {
                  "logs.$[].photos": req.body.photo
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
