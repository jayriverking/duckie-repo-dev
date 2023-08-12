const Duckie = require('../models/duckieModel')
const mongoose = require('mongoose')

// get all duckies

const getDuckies = async (req, res) => {
    const duckies = await Duckie.find()

    res.status(200).json(duckies)
}

// get a single workout

const getADuckie = async (req, res) => {
    // taking in id as a parameter (deconstructed)
    const { id } = req.params
    // id validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such duckie'})
    }

    const duckie = await Duckie.findById(id)

    if (!duckie) {
       return res.status(404).json({error: 'No such duckie'})
    }

    res.status(200).json(duckie)
}

// create new duckie

const createDuckie = async (req, res) => {
    const { name } = req.body

    try {
        const duckie = await Duckie.create({ name })
        res.status(200).json(duckie)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a duckie

const deleteDuckie = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such duckie'})
    }
    // _id is how mongoose sets its id field name;
    const duckie = await Duckie.findOneAndDelete({_id: id})

    if (!duckie){
        return res.status(404).json({error: 'No such duckie'})
    }

    res.status(200).json(duckie)

}


// update a duckie
const updateDuckie = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such duckie'})
    }
    // the second object represents the fields to update;
        // the ...req.body spread syntax will update whatever field was updated in the request body (I think that's how it works)
    const duckie = await Duckie.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!duckie){
        return res.status(404).json({error: 'No such duckie'})
    }

    res.status(200).json(duckie)

}

// feed a duckie!
const feedDuckie = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such duckie'})
    }
    const duckie = await Duckie.findOne({_id: id})
    .then((duckie) => {
        if (duckie.hunger > 99){
            return res.json({message:"duckie is full!"})
        }
        duckie.hunger += 10
        duckie.save()
        res.status(200).json({message: 'duckie has been fed!'})
    })
    .catch((err) => res.status(500).json({message: "uh oh! something went wrong"}))

}



module.exports = {
    getDuckies,
    getADuckie,
    createDuckie,
    deleteDuckie,
    updateDuckie,
    feedDuckie
}