// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

// const Schema = mongoose.Schema

// // // const personSchema = new Schema({
// // //   firstName: String,
// // //   lastName: String,
// // //   age: Number
// // // })

// // const personSchema = new Schema({
// //     firstName: { type: String, required: true },
// //     lastName: String,
// //     age: Number
// // })

// const personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address : {
//       city : String,
//       street: String,
//       apartment : Number
//     }
//   })

// //   const personSchema = new Schema({
// //   firstName: String,
// //   lastName: String,
// //   age: Number,
// //   // address : addressSchema
// // })

// const Person = mongoose.model('person', personSchema)

// // let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 }) //purposefully ignoring the `address` field

// // console.log(p1)
// // p1.save()

// mongoose.connect('mongodb://localhost/computerDB')

// // const Schema = mongoose.Schema

// const computerSchema = new Schema({
//   maker: String, 
//   price: Number
// })
// const Computer = mongoose.model("Computer",computerSchema) 

// let c1 = new Computer ({maker: "HP", price: 1000})
// let c2 = new Computer({maker: "Apple", price : 3000})

// // c1.save().then( () => c2.save ).then(() => {
// // 	mongoose.connection.close()
// // })
// // const allComputer = [c1,c2]
// // allComputer.forEach(a=>a.save())

// // Person.find({}, function (err, people) {
// //   console.log(people)
// // })

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person
