// const getDummyData = async function(){
//     let results = await $.get("https://jsonplaceholder.typicode.com/users")
//     console.log(results)
//     //Looks synchoronus, Not actual synchoronus (it's synchoronus just in that scope) 
// console.log("you see?")
// }

// getDummyData()
// console.log("hello")

const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521"

const fetchData = function(){
    $.get(API_URL, function(res){
        console.log(res.items[0])
    })
}

const fetchDatum = async function () {
    let data = await $.get(API_URL)
    console.log(data.items[0])
}
fetchData()
fetchDatum()

const fetchData = async function (surname) {
    let data = await Person.find({ lastName: surname })
        console.log(data)
}


//this is bad. The rule says that if you use async, then all the ancestor functions must be async when returning data back.

// If we want this to work, we must make innocentFunc an async function as well, and use await getArticles()

const getArticles = async function(){
    let articles = await $.get('/articles')
    return articles
}

const innocentFunc = function(){
    let articles = getArticles()
    render(articles)
}

innocentFunc()

//good
class ApiManager {

    constructor(stocksAPI, renderer) {
        this.stocksAPI = stocksAPI
        this.renderer = renderer
    }

    async fetchStockData(ticker) {
        let stockData = await $.get(`${this.stocksAPI}/${ticker}`)
        this.renderer.render(stockData)
    }
}

 //good
const getArticles = async function(){
    let articles = await $.get('/articles')
    return articles
}

const innocentFunc =async function(){
    let articles = await getArticles()
    render(articles)
}

innocentFunc()

const getFeed = async function(user){
    let name = user.firstName + user.lastName
    let feed = await $.get('/feedApi/' + name)
    return feed
}

const puppeteer = async function(user){
    let feed = await getFeed(user)
    render(feed)
}

//this is bad. The rule says that all async functions return a promise, no matter what - therefore the value of result will be a Promise, and not the result from the GET request, even though we used await. The await only applies to the scope of the function.

const getData = async function () {
    let data = await $.get('/data')
    return data
}

const result = getData()

//this is bad. The rule says that you can only use await on thenable operations. The request module in Node does not return a promise, therefore we cannot use await here.

const nbaFetcher = async function () {
    let nbaData = await request('/nbaAPI')
    console.log(nbaData)
}

nbaFetcher()

//this is bad. The rule says that you cannot use await outside of an async function

const requestBankInfo = async function(){
    let info = await $.get('/bankAPI')
    return info
}

let bankInfo = await requestBankInfo()


// Technically, this is fine.
// But. The problem with the above is that it will slow down your code - this is because every line has to finish executing (i.e. the whole GET request must finish) before moving on to the next line
// But the whole point of writing asynchronous code is the ability to do things simultaneously. In the above, the Facebook data doesn't depend on the Twitter data - there's no reason for the second request to wait for the first to finish. This would be better to execute with promises/callbacks.
const loadAllUserData = async function (user) {
    let twitterData = await $.get('/twitter/' + user.name)
    let facebookData = await $.get('/facebook/' + user.name)
    let linkedinData = await $.get('/linkedin/' + user.name)

    render({
        twitter: twitterData,
        fb: facebookData,
        li: linkedinData
    })
}

//Yes sweet mother of Moses - this is a perfect usecase for async / await - the bookApi does depend on the titleAPI to finish, so the second request does need to wait for the first to finish. Excellent.

const loadBook = async function (title) {
    let bookISBN = await $.get('/titleAPI/' + title)
    let bookData = await $.get('/bookApi/' + bookISBN)

    render(bookData)
}

loadBook()
