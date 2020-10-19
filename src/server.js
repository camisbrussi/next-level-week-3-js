// import dependences
const express = require('express');
const path = require('path');
const pages = require('./pages.js');



const server = express()
server

//body req
.use(express.urlencoded({ extended: true }))
//static diretory
.use(express.static('public'))

//config template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//rotes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


//start server
server.listen(5500)