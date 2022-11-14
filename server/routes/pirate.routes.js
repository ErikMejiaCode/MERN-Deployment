const express = require('express')

const{
    handleCreatePirate,
    handleGetAllPirates,
    handleGetPirateById,
    handleDeletePirateByID,
    handleUpdatePirateById
} = require('../controllers/pirate.controller')

const router = express.Router();

router.get('/', handleGetAllPirates)
router.get('/:id', handleGetPirateById)
router.post('/', handleCreatePirate)
router.put('/:id', handleUpdatePirateById)
router.delete('/:id', handleDeletePirateByID)

module.exports = {pirateRouter: router};