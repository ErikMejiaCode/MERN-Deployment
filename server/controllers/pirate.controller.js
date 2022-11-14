const {
    createPirate,
    getAllPirates,
    getPirateById,
    deletePirateById,
    getPirateByIdAndUpdate
} = require('../services/pirate.service')

//Create Pirate 
const handleCreatePirate = async (req, res) => {
    console.log('controller: handleCreatePirate, req.body:', req.body);
    try{
        const pirate = await createPirate(req.body);
        return res.json(pirate)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Get all Pirates 
const handleGetAllPirates = async (req, res) => {
    console.log('controller: handleGetAllPirates');
    try{
        const pirates = await getAllPirates();
        return res.json(pirates)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Get Pirate by ID 
const handleGetPirateById = async (req, res) => {
    console.log('controller: handleGetPirateById, req.params: ', req.params.id);
    try{
        const pirate = await getPirateById(req.params.id);
        return res.json(pirate)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Delete Pirate by ID 
const handleDeletePirateByID = async (req, res) => {
    console.log('controller: handleDeletePirateByID, req.params: ', req.params.id);
    try{
        const pirate = await deletePirateById(req.params.id);
        return res.json(pirate)
    } catch(error) {
        return res.status(400).json(error)
    }
}

//Update Pirate by ID 
const handleUpdatePirateById = async (req, res) => {
    console.log('controller: handleUpdatePirateById, req.params: ', req.params.id, "\n req.body: ", req.body);
    try{
        const pirate = await getPirateByIdAndUpdate(req.params.id, req.body);
        return res.json(pirate)
    } catch(error) {
        return res.status(400).json(error)
    }
}


module.exports = {
    handleCreatePirate,
    handleGetAllPirates,
    handleGetPirateById,
    handleDeletePirateByID,
    handleUpdatePirateById
}