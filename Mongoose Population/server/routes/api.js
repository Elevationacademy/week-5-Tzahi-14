const express = require('express')
const router = express.Router()

const {Book,Review,Critic} = require('../models/books')

const {SolarSystem,Planet,Visitor} = require('../models/planet')

// router.get('/books', function (req, res) {
//     Book.find({}, function (err, books) {
//         res.send(books)
//     })
// })

// router.delete('/apocalypse', function (req, res) {
//     Book.remove(function(err){
//         res.send()
//     }).then(()=>{Review.remove(function(err){
//         res.send()
//     })}).then(()=>Critic.remove(function(err){
//         res.send()
//     }))
// })
// router.delete('/apocalypse',function(req,res){
//     // const id = req.body.id
//     Person.remove(function(err){
//         console.log(err)
//         res.end()
//     })
// })

module.exports = router
