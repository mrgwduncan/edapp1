const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getAll()
        .then(creatures => {
        res.render('index', {creature: creatures})
    })
    
})

router.get('/display/:id', (req, res) => {
    // key=(req.params.id).toLowerCase()
    key=(req.params.id)
    db.getCreature(key)
        .then(creature => {
        console.log(creature)  
        res.render('display', {creature: creature[0]})       
        })
    
})

module.exports = router