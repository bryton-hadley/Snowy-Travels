// IMPORTING
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {SERVER_PORT} = process.env;
const {sequelize} = require('./util/database')
const { Resort } = require('./models/resort')
const { User } = require('./models/user')
const {seed} = require('./util/seed')
const {getAllResorts, addResort, removeResort, getCurrentUserResorts, addToTravelList} = require('./controllers/resorts')
const { TravelList } = require('./models/travelList')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Resort)
Resort.belongsTo(User)

User.hasMany(TravelList)
Resort.hasMany(TravelList)
TravelList.belongsTo(User)
TravelList.belongsTo(Resort)

const {register, login} = require('./controllers/authCtrl')
const {isAuthenticated} = require('./middleware/isAuthenticated')


app.post('/register', register)
app.post('/login', login)
// seeding my own api 
app.post('/seed', seed)

// getting all my resorts
app.get("/resorts", getAllResorts)

// endpoints
app.post('/userresort/:userId', isAuthenticated, addToTravelList)
app.delete("/userresort/:id", isAuthenticated, removeResort)
app.get("/userresort/:userId", isAuthenticated, getCurrentUserResorts)

sequelize
    .sync()
    .then(() => {
      app.listen(SERVER_PORT, () => {
        console.log(`Team 7 squad up on port ${SERVER_PORT}`)})
    })