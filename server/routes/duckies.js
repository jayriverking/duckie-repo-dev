const express = require('express');

const {
    getDuckies,
    getADuckie,
    createDuckie,
    deleteDuckie,
    updateDuckie,
    feedDuckie,
    petDuckie,
    playDuckie,
    studyDuckie
} = require('../controllers/duckieController')

// importing Duckie model
// const Duckie = require('../models/duckieModel')

// set up a router
const router = express.Router();

// set up a (CRUD, REST) method; get all ducks
router.get('/', getDuckies)

// get a single duck
router.get('/:id', getADuckie)

// post/create a duck
router.post('/', createDuckie)

// delete a duck
router.delete('/:id', deleteDuckie)

// update a duck
router.patch('/:id', updateDuckie)

// feed a duck (patch request!)
router.patch('/:id/feed', feedDuckie)

// pet a duck
router.patch('/:id/pet', petDuckie)

// study with a duck
router.patch('/:id/study', studyDuckie)

// play with a duck
router.patch('/:id/play', playDuckie)



// export the router to be imported in server.js
module.exports = router