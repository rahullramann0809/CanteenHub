const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String },
    available: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5 },
    createdBy: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Dish', dishSchema);