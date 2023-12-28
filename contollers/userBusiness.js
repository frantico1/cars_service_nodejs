const UserBusiness = require('../models/UserBusiness');


const getUser = (req, res) => {

    UserBusiness.find().then(user => {
        res.json(user);
    }).catch(err => { res.json(err) });
}

const getUserDetails = (req, res) => {
    UserBusiness.findById(req.params.id).then(user => {
        res.json(user);
    }).catch(err => { res.json(err) });
}

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
        business_name: req.body.business_name,
        business_phone: req.body.business_phone,
        business_email: req.body.business_email,
        business_address: req.body.business_address,
        business_description: req.body.business_description,
        business_logo: req.body.business_logo,
        business_location: req.body.business_location,
        role: "business"

    })
    user.save()
    res.json(user)
    console.log('Kullanıcı eklendi!')
}

const updateUser = (req, res) => {
    Cars.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        country: req.body.country,
        city: req.body.city,
        districts: req.body.districts,
        business_name: req.body.business_name,
        business_phone: req.body.business_phone,
        business_email: req.body.business_email,
        business_address: req.body.business_address,
        business_description: req.body.business_description,
        business_logo: req.body.business_logo,
        business_location: req.body.business_location,
        role: req.body.role,

    }).then(product => {
        res.json(product);
    }).catch(err => { res.json(err); });
}

const deleteUser = (req, res) => {
    UserBusiness.findByIdAndRemove(req.params.id).then(user => {
        res.json(user);
    }).catch(err => { res.json(err) });
}




module.exports = {
    getUser,
    getUserDetails,
    addUser,
    updateUser,
    deleteUser
}