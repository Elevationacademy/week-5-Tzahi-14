const bookSchema = new Schema({
    title: String,
    author: String,
    reviews: [reviewSchema]
})

const reviewSchema = new Schema({
    book: bookSchema,
    reviewText: String,
    critic: criticSchema
})

const criticSchema = new Schema({
    name: String,
    reviews: [reviewSchema],
})


const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)


const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
  })
  
  const reviewSchema = new Schema({ 
    book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
    reviewText: String,
    critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
  })
  
  const criticSchema = new Schema({ 
    name: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
  })
  