require('dotenv').config();

const { User } = require('../models/user')
const { Resort } = require('../models/resort')
const {TravelList} = require('../models/travelList') 

module.exports = {
    getAllResorts: async (req, res) => {
        try { 
            const resorts = await Resort.findAll()
            res.status(200).send(resorts)
        } catch (error) {
            console.log("ERROR in getAllResorts")
        }
    },
    addResort: async (req, res) => {
        try {
            const {resortId, userId} = req.body
            await Resort.create({resortId, privateStatus: userId})
            res.sendStatus(200)
            
        } catch (error) {
            console.log(error)
            res.sendStatus(500)            
        }
    },
    addToTravelList: async (req, res) => {
        try {
            const {userId, resortId} = req.body
            await TravelList.create({ userId, resortId })
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(400)
        } 
    }, 
    getCurrentUserResorts: async (req, res) => {
        try {
            console.log('hit getCurrentUserResorts')
            const {userId} = req.params
            const resorts = await TravelList.findAll({
                where: {userId: userId},
                include: [{
                    
                        model: Resort,
                        require: true,
                        attributes: ['image','name','price','state','city','slopeCount','lifts']
                    
                }]
            })
            res.status(200).send(resorts)
        } catch (error) {
            console.log(error)
            res.sendStatus(400)
        }
    },
    removeResort: async (req, res) => {
        try {
            const {id} = req.params
            await TravelList.destroy({where: {id: +id}})
            res.sendStatus(200)
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    },
    
}