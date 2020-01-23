const express = require('express')
const db = require('./db')
const router = express.Router()
var formidable = require('formidable');

router.get('/', (req, res) => {
    db.getAll()
        .then (creatures => {
            db.getType()
            .then(type => {
                res.render('index', {creature: creatures, type: type })
            })
            
        })
    })
router.post('/',(req, res) =>{
    let name=(req.body.name)
    let type=(req.body.type)
    if(name !== 'None'){
        res.redirect('/display/'+name)
    } else {
    
        res.redirect('/mutlidisplay/'+type)

    }
    
})
router.get('/mutlidisplay/:id',(req, res) =>{
    key=(req.params.id)
    db.displaytype(key)
        .then(creatures => {
            console.log(creatures)
            res.render('mutlidisplay',{creature: creatures})
        })

})
router.get('/display/:id', (req, res) => {
    // key=(req.params.id).toLowerCase()
    key=(req.params.id)
    db.getCreature(key)
        .then(creature => {
        res.render('display', {creature: creature})       
        })
    
})
router.get('/addcreature/', (req, res) => {
    res.render('addcreature')
})
router.post('/addcreature/', (req, res) => {
    let name =req.body.name
    console.log(name)
    var form = new formidable.IncomingForm();
    console.log('got here')
    let fileName =""
    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/public/images/' + file.name;
        console.log(file.path)
    });
    form.on('file', function (name, file){
        fileName= file.name
    });
    newCreature = {
        name: req.body.name,
        aligment:req.body.aligment,
        size:req.body.aligment,
        image_url:'/images/'+fileName   
        }
        console.log(newCreature)
        db.addCreature(newCreature)
        .then()
        res.redirect('/')
})

module.exports = router