const Company = require('../models/company.model');
const router = require('express').Router();

router.route('/new').post((req, res)=>{
    console.log("Attempting to add Company")
    const newCompany = new Company(req.body);
    newCompany.save()
        .then(company=>res.json(company))
        .catch(err=>res.status(400).json("Error!" + err))
});

router.route('/').get((req, res) => {
    // using .find() without a parameter will match on all user instances
    Company.find()
        .then(allCompanies => res.json(allCompanies))
        .catch(err => res.status(400).json('Error! ' + err))
})

router.route('/update/:id').put((req, res) => {
    Company.findByIdAndUpdate(req.params.id, req.body)
        .then(company => res.json('Success! Company updated.'))
        .catch(err => res.status(400).json('Error! ' + err))
})

module.exports = router;
