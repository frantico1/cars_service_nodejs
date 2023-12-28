
const mongoose = require('mongoose');


const CarsSchema = new mongoose.Schema({
    car_business_id: { type: String, required: true },
    car_name: { type: String, required: true },
    car_number_plate: { type: String, required: true },
    car_model: { type: String, required: true },
    car_model_year: { type: Date, required: true },
    car_color: { type: String, required: true },
    car_price_in_city: { type: Number, required: true },
    car_price_out_city: { type: Number, required: true },
    car_km: { type: Number, required: true },
    car_hire_date: { type: Date },
    car_hire_end_date: { type: Date },
    car_status: { type: Boolean, required: true },
    car_is_reserved: { type: Boolean },
    car_photo: { type: String, required: true },
    createAt: { type: Date, default: Date.now },

});


module.exports = mongoose.model("cars", CarsSchema);
