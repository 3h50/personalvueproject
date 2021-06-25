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

router.route('/waypoints/:id').delete((req, res)=>{
  console.log("Attempting to remove a waypoint from a Log from a Boat")
  console.log(req.body)
  Boat.updateOne(
        {_id: req.params.id},
        {$pull: {
          "logs.$[].waypoints":{_id : req.body.waypointID} }},
        { new: true }
      )
      .then(boat => res.json(boat))
      .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/waypoints/:id').post((req, res)=>{
  console.log("Attempting to add waypoint to a Log to a Boat")
  console.log(req.body)
  Boat.updateOne({
                _id: req.params.id,
                "logs._id": req.body.logID
              }, {
                $addToSet: {
                  "logs.$[].waypoints": req.body.waypoint
                }
              }).then(boat => res.json(boat))
              .catch(err => res.status(400).json('Error! ' + err))
});


// add something here to remove from wasabi bucket
router.route('/waypoints/:id').delete((req, res)=>{
  console.log("Attempting to remove a waypoint from a Log from a Boat")
  Boat.updateOne(
        {_id: req.params.id},
        {$pull: {
          "logs.$[].waypoints":{_id : req.body.waypointID} }},
        { new: true }
      )
      .then(boat => res.json(boat))
      .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/waypoints/:id').post((req, res)=>{
  console.log("Attempting to add waypoint to a Log to a Boat")
  Boat.updateOne({
                _id: req.params.id,
                "logs._id": req.body.logID
              }, {
                $addToSet: {
                  "logs.$[].waypoints": req.body.waypoint
                }
              }).then(boat => res.json(boat))
              .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/waypoints/:id').put((req, res)=>{
  console.log("Attempting to update waypoint to a Log to a Boat")
  console.log(req.body)
  Boat.findOneAndUpdate({
                _id: req.params.id,
                "logs._id": req.body.logID,
                "waypoints._id" : req.body.waypointID
              }, {$set: {'logs.waypoints' :req.body.waypoint}}
              , {new: true, useFindAndModify:false})
              .then(boat => res.json(boat))
              .catch(err => res.status(400).json('Error! ' + err))
});

router.route('/overhaul/:id').post((req, res)=>{
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
