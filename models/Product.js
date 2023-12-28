
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },
    createAt: { type: Date, default: Date.now },

});


module.exports = mongoose.model("products", ProductSchema);
