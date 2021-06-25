const Log = require('../models/log.model');
const router = require('express').Router();


//POST NEW LOG
router.route('/new').post((req, res) => {
  console.log("Attempting to add Log to Log");
  const newLog = new Log(req.body);
  newLog.save()
    .then(log => res.json(log))
    .catch(err => res.status(400).json("Error!" + err))
});

// DELETE LOG OF logid
router.route('/delete/:id').delete((req, res) => {
  console.log("Attempting to remove a Log");
  Log.deleteOne({ _id: req.params.id })
    .then(success => res.json('Success! Log deleted.'))
    .catch(err => res.status(400).json('Error! ' + err))
});


// DELETE A waypointid AT id BOAT WITH logid
// add something here to remove from wasabi bucket if of type 
router.route('/waypoints/:id').delete((req, res) => {
  console.log("Attempting to remove a waypoint from a Log");
  const filter = {
    _id: req.params.id,
  }
  const action = {
    $pull: {
      "waypoints": { _id: req.body.waypointID }
    }
  }
  const options = {
    new: true
  }

  Log.updateOne(filter, action, options)
    .then(log => res.json(log))
    .catch(err => res.status(400).json('Error! ' + err))
});

//ADD A WAYPOINT ON A LOG ON A BOAT
router.route('/waypoints/new').post((req, res) => {
  console.log("Attempting to add waypoint to a Log")
  const filter = {
    _id: req.body.logID
  }
  const action = {
    $addToSet: {
      "waypoints": req.body.waypoint
    }
  }
  const options = {
    new: true
  }

  Log.updateOne(filter, action, options).then(log => res.json(log))
    .catch(err => res.status(400).json('Error! ' + err))
});

//UPDATE A WAYPOINT ON A LOG ON A BOAT WITHOUT FCKING UP THE REST
router.route('/waypoints/:id').put((req, res) => {
  console.log("Attempting to update waypoint to a Log to a Log")
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

  Log.updateOne(filter, action, options)
    .then(log => res.json(log))
    .catch(err => res.status(400).json('Error! ' + err))
});

module.exports = router;
