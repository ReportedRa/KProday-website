const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../db.js')

const Product = sequelize.define('product', {
    product_id: {type: DataTypes.INTEGER, primaryKey: true},
    category_id: {type: DataTypes.STRING},
    game_id: {type: DataTypes.STRING},
    product_cost: {type: DataTypes.INTEGER},
    product_description: {type: DataTypes.STRING},
    product_img: {type: DataTypes.STRING},
},
{
    timestamps: false
})

module.exports = {Product}