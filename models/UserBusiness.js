
const mongoose = require('mongoose');


const UserBusinessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    role: { type: String, required: true },
    business_name: { type: String, required: true },
    business_phone: { type: String, required: true },
    business_email: { type: String, required: true },
    business_description: { type: String, required: true },
    business_address: { type: String, required: true },
    business_logo: { type: String, required: true },
    business_location: { type: String, required: true },
    createAt: { type: Date, default: Date.now },

});


module.exports = mongoose.model("userbusiness", UserBusinessSchema);
