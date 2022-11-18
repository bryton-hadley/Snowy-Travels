require('dotenv').config();

const { User } = require('../models/user')
const { Resort } = require('../models/resort') 

module.exports = {
    getAllResorts: async (req, res) => {
        try { 
            const resorts = await Resort.findAll()
            
        } catch (error) {
            console.log("ERROR in getAllResorts")
        }
    },
    addResort: async (req, res) => {
        console.log('Resort was added')
    },
    deleteResort: async (req, res) => {
        console.log('resort was removed')
    }
}