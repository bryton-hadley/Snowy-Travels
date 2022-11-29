const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    TravelList: sequelize.define('travel_list', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
       
        
    })
}