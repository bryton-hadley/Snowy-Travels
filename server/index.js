// IMPORTING
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {SERVER_PORT} = process.env;
const {sequelize} = require('./util/database')
const { Resort } = require('./models/resort')
const { User } = require('./models/user')
const {seed} = require('./util/seed')
const {getAllResorts, addResort, deleteResort} = require('./controllers/resorts')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Resort)
Resort.belongsTo(User)

// seeding my own api 
app.post('/seed', seed)

// getting all my resorts
app.get("/resorts", getAllResorts)

// endpoints
// app.get("userresorts/:userId", )
app.post('/resort', addResort)
app.delete("/resort/:id", deleteResort)

sequelize
    .sync()
    .then(() => {
      app.listen(SERVER_PORT, () => {
        console.log(`Team 7 squad up on port ${SERVER_PORT}`)})
    })