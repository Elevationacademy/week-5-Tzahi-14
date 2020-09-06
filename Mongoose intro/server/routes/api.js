const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

// router.post('/person', function (req, res) {
//     const person = req.body
//     let p1 = new Person({
//         firstName: String,
//         lastName: String,
//         age: Number
//     })
//     console.log(p1)
//     p1.save()
//     res.end()
// })

router.put('/person/:id', function(req,res){
    let id = req.params.id
    Person.findByIdAndUpdate(`${id}`, {age:80},{ new: true },function (err,person){
        console.log(person)
        res.end()

    })
})

router.delete('/apocalypse',function(req,res){
    // const id = req.body.id
    Person.remove(function(err){
        console.log(err)
        res.end()
    })
})
// router.put('/person/:id', function(req, res) {
//     let id = req.params.id
//     Person.findByIdAndUpdate(id, {age: 80}, function(err, person) {
//         res.end()
//     })
// })


router.post('/person', function (req, res) {
    let person = req.body
    console.log(person)
    let p1 = new Person({
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age
    })

    p1.save()
    res.end()
})

module.exports = router
