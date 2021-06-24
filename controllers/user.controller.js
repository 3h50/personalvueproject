const User = require('../models/user.model');
const router = require('express').Router();

router.route('/new').post();

router.route('/').get();

router.route('/delete/:id').delete();

router.route('/dupdate/:id').put();

module.exports = router;
