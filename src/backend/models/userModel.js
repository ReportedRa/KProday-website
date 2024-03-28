const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const User = sequelize.define('user', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nickname: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    balance: {type: DataTypes.INTEGER}
},
{
    timestamps: false
})

module.exports = {User}