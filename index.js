
const express = require("express");
const app = express();
const port = 8000

const routes = require('./routes.js')
const bodyParser = require('body-parser')

app.use(express.static('./app/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(bodyParser.urlencoded())
app.set('view engine', 'ejs')
app.use(express.static('public'))

routes(app)



app.listen(port , ()=>{
    console.log('servidor iniciado')
})