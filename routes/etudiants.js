const express = require('express')
const router = express.Router()

const  {
    getEtudiants,
    getEtudiant,
    createEtudiant,
    updateEtudiant,
    deleteEtudiant
} = require('../controllers/etudiants.js')

router.get('/', getEtudiants)

router.get('/:etudiantID', getEtudiant)

router.post('/', createEtudiant) 

router.put('/:etudiantID', updateEtudiant) 

router.delete('/:etudiantID', deleteEtudiant)

module.exports = router