const mongoose = require('./connection')

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////

const { Schema, model } = mongoose;

const fruitSchema = new Schema ({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;