const router = require('express').Router();
const User = require('../mongoose/user.model')

router.route('/').get((req, res) => {
    console.log(req.originalUrl)
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
    console.log(req.originalUrl)
    const username = req.body.username
    const newUser = new User({ username })
    newUser.save()
        .then(() => res.json('User added successfully!!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router