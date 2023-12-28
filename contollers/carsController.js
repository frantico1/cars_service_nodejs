const Cars = require("../models/Cars");

const getCars = (req, res) => {
  Cars.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });

  console.log("Araçlar listelendi");
};

const getCarsDetails = (req, res) => {
  Cars.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("Araçlar detayları listelendi");
};

const addCars = (req, res) => {
  const cars = new Cars({
    car_name: req.body.car_name,
    car_number_plate: req.body.car_number_plate,
    car_model: req.body.car_model,
    car_color: req.body.car_color,
    car_price_in_city: req.body.car_price_in_city,
    car_price_out_city: req.body.car_price_out_city,
    car_km: req.body.car_km,
    car_hire_date: req.body.car_hire_date,
    car_hire_end_date: req.body.car_hire_end_date,
    car_model_year: req.body.car_model_year,
    car_status: req.body.car_status,
    car_is_reserved: req.body.car_is_reserved,
    car_photo: req.body.car_photo,
    car_business_id: req.body.car_business_id,
  });
  cars.save();
  res.json(cars);

  console.log("Araç eklendi");
};

const updateCars = (req, res) => {
  Cars.findByIdAndUpdate(req.params.id, {
    car_name: req.body.car_name,
    car_number_plate: req.body.car_number_plate,
    car_model: req.body.car_model,
    car_color: req.body.car_color,
    car_price_in_city: req.body.car_price_in_city,
    car_price_out_city: req.body.car_price_out_city,
    car_km: req.body.car_km,
    car_hire_date: req.body.car_hire_date,
    car_hire_end_date: req.body.car_hire_end_date,
    car_model_year: req.body.car_model_year,
    car_status: req.body.car_status,
    car_is_reserved: req.body.car_is_reserved,
    car_photo: req.body.car_photo,
    car_business_id: req.body.car_business_id,
  })
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json(err);
    });

  console.log("Araç güncellendi");
};

const deleteCars = (req, res) => {
  Cars.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json("Data deleted");
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("Araçlar silindi");
};

module.exports = {
  getCars,
  getCarsDetails,
  addCars,
  updateCars,
  deleteCars,
};
