const express = require('express')
const { v4: uuid } = require('uuid')
const ejs = require('ejs') //ejs
const path = require('path') //ejs

const app = express()

const port = 8080;

app.use(express.static(path.join(__dirname, 'public'))); //static file

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //when u expect the json data in the request body.

app.set('view engine', ejs)   //ejs
app.set("views", path.join(__dirname, 'views')) // ejs 


let posts = [{
    id:uuid(),
    username:"Naved",
    password:"xyz"
},
{
    id:uuid(),
    username:"Noman",
    password:"xyz"
},
{
    id:uuid(),
    username:"saimoon",
    password:"xyz"
},
{
    id:uuid(),
    username:"Tabassum",
    password:"xyz"
}]

app.get('/posts/new',(req,res)=>{
    res.render('index.ejs',{posts})
})

app.get('/', (req, res) => {
    res.send('Server is working')
})

app.get('/post/new',(req,res)=>{
    res.render('new.ejs')
})
``
app.get('/:username/:id', (req, res) => {
    const { username, id } = req.params
    console.log(username, id);
    res.send(`${username},${id}`)

})

app.post('/posts', (req, res) => {
    const {id} = uuid()
    const { username, password } = req.body
    res.send(`${username},${password}`)

})


app.get('*', (req, res) => {
    res.send('Something went wrong')
})

app.listen(port, (req, res) => {
    console.log('app is litening at the port 8080');

})