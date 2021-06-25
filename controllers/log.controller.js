const Boat = require('../models/boat.model');
const router = require('express').Router();


//POST NEW LOG TO id OF BOAT
router.route('/:id').post((req, res) => {
  console.log("Attempting to add Log to Boat");
  const filter = {
    _id: req.params.id,
  }
  const action = {
    $addToSet: {
      logs: req.body
    }
  }
  const options = {
    new: true
  }
  Boat.updateOne(filter, action, options).then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
});

// DELETE LOG OF id BOAT WITH logid
router.route('/:id').delete((req, res) => {
  console.log("Attempting to remove a Log from Boat");
  const filter = {
    _id: req.params.id,
  }
  const action = {
    $pull: {
      logs: { _id: req.body.logID }
    }
  }
  const options = {
    new: true,
  }
  Boat.updateOne(
    filter,
    action, options
  ).then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
});


// DELETE A waypointid AT id BOAT WITH logid
// add something here to remove from wasabi bucket if of type 
router.route('/waypoints/:id').delete((req, res) => {
  console.log("Attempting to remove a waypoint from a Log from a Boat");
  const filter = {
    _id: req.params.id,
  }
  const action = {
    $pull: {
      "logs.$[log].waypoints": { _id: req.body.waypointID }
    }
  }
  const options = {
    new: true,
    arrayFilters: [{ 'log._id': req.body.logID }]
  }

  Boat.updateOne(filter, action, options)
    .then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
});

//ADD A WAYPOINT ON A LOG ON A BOAT
router.route('/waypoints/:id').post((req, res) => {
  console.log("Attempting to add waypoint to a Log to a Boat")
  const filter = {
    _id: req.params.id
  }
  const action = {
    $addToSet: {
      "logs.$[log].waypoints": req.body.waypoint
    }
  }
  const options = {
    new: true,
    arrayFilters: [{ 'log._id': req.body.logID }]
  }

  Boat.updateOne(filter, action, options).then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
});

//UPDATE A WAYPOINT ON A LOG ON A BOAT WITHOUT FCKING UP THE REST
router.route('/waypoints/:id').put((req, res) => {
  console.log("Attempting to update waypoint to a Log to a Boat")
  const filter = {
    _id: req.params.id
  }
  const action = {
    $set: {
      'logs.$[log].waypoints.$[waypoint]': req.body.waypoint
    }
  }
  const options = {
    new: true,
    useFindAndModify: false,
    arrayFilters: [{ 'log._id': req.body.logID }, { 'waypoint._id': req.body.waypointID }]
  }

  Boat.updateOne(filter, action, options)
    .then(boat => res.json(boat))
    .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router;
