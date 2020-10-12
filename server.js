const express = require('express')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser')
var properties = require('./properties')
var db = require('./database');
const PORT = 8000;

// App
var cardRoutes = require('./routes');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

var router = express.Router();
db();

var cards = require('./card');
var savedPokemon = {}

app.get('/pokemon/:id', function(req, res){
    if(!(req.params.id in savedPokemon)){
        axios.get("https://pokeapi.co/api/v2/pokemon/" + req.params.id)
        .then(function (pokeData){
            savedPokemon[req.params.id] = pokeData.data
            res.send(savedPokemon[req.params.id])
        })
        .catch(function (error){
            console.log(error);
        });
    }else{
        console.log("Already in memory")
        res.send(savedPokemon[req.params.id])
    }
    
});

app.use('/api/v1/pokemon-card', router)
cardRoutes(router)

app.listen(PORT, function() {
    console.log("Server is listening on "+ PORT + " port");
});

