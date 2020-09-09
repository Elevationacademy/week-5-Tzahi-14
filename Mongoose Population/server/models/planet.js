const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/planetsDB', { useNewUrlParser: true })
const Schema = mongoose.Schema

const SolarSystemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    starName: String,
})
const PlanetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const VisitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
})

const SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema)
const Planet = mongoose.model("Planet", PlanetSchema)
const Visitor = mongoose.model("Visitor", VisitorSchema)

let ss = new SolarSystem({
    planets: [],
    starName: "Shabtai"
})

let p1 = new Planet({
    name: "pluto",
    system: ss,
    visitors: []
})

let p2 = new Planet({
    name: "Marsy",
    system: ss,
    visitors: []
})

let p3 = new Planet({
    name: "Uranusy",
    system: ss,
    visitors: []
})

let v1 = new Visitor({
    name: "Tzahi David",
    homePlanet: p2,
    visitedPlanets: []
})


let v2 = new Visitor({
    name: "Mr Uranus",
    homePlanet: p3,
    visitedPlanets: []
})

// ss.planets.push(p1)
// ss.planets.push(p2)
// ss.planets.push(p3)

// v1.visitedPlanets.push(p3)
// v1.visitedPlanets.push(p1)

// p1.visitors.push(v1)
// p3.visitors.push(v1)

// v2.visitedPlanets.push(p1)
// p1.visitors.push(v2)

// ss.save()

// p1.save()
// p2.save()
// p3.save()

// v1.save()
// v2.save() 

////////

// s1.planets.push(p1)
// p1.visitors.push(v1)
// v1.visitedPlanets.push(p1)

// s1.save()
// p1.save()
// v1.save()


// s1.planets.push(p2)
// s1.planets.push(p3)

// v1.visitedPlanets.push(p3)

// p3.visitors.push(v1)

// v2.visitedPlanets.push(p1)
// p1.visitors.push(v2)


// p2.save()
// p3.save()

// v2.save()


// // Visitor.find({},function(err,visitors){
// //     console.log(visitors)
// // })

// // SolarSystem.find({},function(err,solarSystems){
// //     console.log(solarSystems)
// // })

// Find a visitor's list of visited planets
Visitor.findOne({})
    .populate("visitedPlanets")
    .exec(function (err, visitor) {
        console.log(visitor.name )
        visitor.visitedPlanets.forEach(v => console.log(v.name))
    })

// Find all the visitors on a planet
// Planet.findOne({})
// .populate("visitors")
// .exec(function(err, planet) {
//     console.log(planet.name) //to find witch planet we recive in findOne
//     planet.visitors.forEach(v => console.log(v.name))
// })

// Find all the visitors in a system (subdocuments!)

SolarSystem.findOne({})
    .populate({
        path: "planets",
        populate: {
            path: "visitors"
        }
    }).exec(function (err, solarSystem) {
        for (planet of solarSystem.planets) {
            planet.visitors.forEach(pv => console.log(pv.name))
        }
        
    })


// //Find the name of the star in the system of a visitor's home planet
// Visitor.findOne({})
//     .populate({
//         path: "homePlanet",
//         populate:{
//             path:"system"
//         }
//     }).exec(function(err,visitor){
//         console.log(visitor.homePlanet.system.starName)
//     })
   

// //Find a planet's system's star name as well as its visitors
// Planet.findOne({})
// .populate("system visitors")
// .exec(function(err,planet){
//     console.log(planet.system.starName)
//     planet.visitors.forEach(vp=>console.log(vp.name))
// })


// Planet.findOne({}).populate({
//     path: "system visitors",
//     populate: {
//         path: "homePlanet"
//     }
// }).exec(function(err, planet) {
//     planet.visitors.forEach(v => console.log(v.homePlanet.name))
// })

module.exports = { SolarSystem, Planet, Visitor }