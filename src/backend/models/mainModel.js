const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const Game = sequelize.define('game', {
    game_id: {type: DataTypes.STRING, primaryKey: true},
    game_title: {type: DataTypes.STRING},
    game_image: {type: DataTypes.STRING},
    game_logo: {type: DataTypes.STRING},
    game_background: {type: DataTypes.STRING},
    game_category: {type: DataTypes.ARRAY(DataTypes.STRING)},
    category_id: {type: DataTypes.ARRAY(DataTypes.STRING)}
},
{
    timestamps: false
})

module.exports = {Game}