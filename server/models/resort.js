const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Resort: sequelize.define('resort', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      slopeCount: DataTypes.INTEGER,
      lifts: DataTypes.INTEGER
    })
}