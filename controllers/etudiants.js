const etudiants = require('../data.js')

// Lister les étudiants

const getEtudiants = ((req, res) => {
    res.json(etudiants)
})

// Créer un étudiant

const createEtudiant = ((req, res) => {
    const { prenom, nom, age } = req.body;
    console.log("Body Request: ", req.body);
    const newEtudiant = {
        id: etudiants.length + 1,
        prenom,
        nom,
        age
    }
    etudiants.push(newEtudiant)
    res.status(201).json(newEtudiant)
})

// Récupérer un étudiant grace à son ID

const getEtudiant = ((req, res) => {
    const id = Number(req.params.etudiantID)
    const etudiant = etudiants.find(etudiant => etudiant.id === id)
    if (!etudiant) {
        return res.status(404).send("Pas d'étudiant trouvé")
    }
    res.json(etudiant)
})

// Modifier un étudiant

const updateEtudiant = ((req, res) => {
    const { prenom, nom, age } = req.body;
    const id = Number(req.params.etudiantID)
    const index = etudiants.findIndex(etudiant => etudiant.id === id)
    if (index === -1) {
        return res.status(404).send("Pas d'étudiant trouvé")
    }
    const updatedEtudiant = {
        id: etudiants[index].id,
        prenom: prenom || etudiants[index].prenom,
        nom: nom || etudiants[index].nom,
        age: age || etudiants[index].age
    }
    etudiants[index] = updatedEtudiant
    res.status(200).json({ message: 'Étudiant modifié avec succès !' })
})

// Supprimer un étudiant

const deleteEtudiant = ((req, res) => {
    const id = Number(req.params.etudiantID)
    const index = etudiants.findIndex(etudiant => etudiant.id === id)
        if (index === -1) {
        return res.status(404).send("Pas d'étudiant trouvé")
    }
    etudiants.splice(index,1)
    res.status(200).json({ message: 'La suppression a bien été effectuée' })
})

module.exports = {
    getEtudiants,
    getEtudiant,
    createEtudiant,
    updateEtudiant,
    deleteEtudiant
}