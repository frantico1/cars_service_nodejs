const UserBusiness = require("../models/users");

const getUser = (req, res) => {
  UserBusiness.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });

  console.log("İşletmeler listelendi!");
};

const getUserDetails = (req, res) => {
  UserBusiness.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log("İşletme Detayı getirildi!");
};

const addUser = (req, res) => {
  const user = new UserBusiness({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    country: req.body.country,
    city: req.body.city,
    district: req.body.district,
    role: "user",
    location: req.body.location,
  });
  user.save();
  res.json(user);
  console.log("Kullanıcı eklendi!");
};

const updateUser = (req, res) => {
  UserBusiness.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    country: req.body.country,
    city: req.body.city,
    district: req.body.district,
    role: req.body.role,
    location: req.body.location,
  })
    .then((product) => {
      res.json(product);
      console.log("Kullanıcı güncellendi!");
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteUser = (req, res) => {
  UserBusiness.findByIdAndRemove(req.params.id)
    .then((user) => {
      res.json(user);
      console.log("Kullanıcı silindi!");
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = {
  getUser,
  getUserDetails,
  addUser,
  updateUser,
  deleteUser,
};
