const {Pirate} = require('../models/pirate.model');

const createPirate = async (data) => {
    console.log('service: createPirate');
    const pirate = await Pirate.create(data);
    return pirate;
}

const getAllPirates = async () => {
    console.log('service: getAllPirates')
    const pirates = await Pirate.find();
    return pirates;
}

const getPirateById = async (id) => {
    console.log('service: getPirateById')
    const pirate = await Pirate.findById(id);
    return pirate;
}

const deletePirateById = async (id) => {
    console.log('service: deletePirateById')
    const pirate = await Pirate.findByIdAndDelete(id);
    return pirate;
}

const getPirateByIdAndUpdate = async (id, data) => {
    console.log('service: getPirateByIdAndUpdate')
    const pirate = await Pirate.findByIdAndUpdate(id, data, {
        //re-run our validations upon updated
        runValidators: true,
        //return the updated pirate.
        new: true
    });
    return pirate;
}

module.exports = {
    createPirate,
    getAllPirates,
    getPirateById,
    deletePirateById,
    getPirateByIdAndUpdate
};