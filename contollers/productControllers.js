const Product = require("../models/Product");


const getProduct = (req, res) => {
    Product.find().then((product) => {
        res.json(product)
    })
        .catch((err) => { res.json(err) })
}

const getProductsDetails = (req, res) => {
    Product.findById(req.params.id).then((product) => {
        res.json(product)
    }).catch((err) => { res.json(err) })
}

const addProduct = (req, res) => {

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    });
    product.save();
    res.json(product);

}

const updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    }).then(product => {
        res.json(product);
    }).catch(err => { res.json(err); });
}

const deleteProduct = (req, res) => {
    Product.findByIdAndRemove(req.params.id).then(() => { res.json('Data deleted'); }).catch(err => { res.json(err); });
}

module.exports = {
    getProduct,
    getProductsDetails,
    addProduct,
    updateProduct,
    deleteProduct
}
