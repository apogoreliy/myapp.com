const DB = require('./db');

module.exports = (app) =>{
    app.post('/add_category', (req, res)=> {
        DB.addCategory(req.body).then(function(id) {
            res.json({categoryID:id});
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/add_product', (req, res) => {
        DB.addProduct(req.body).then(function(id) {
            res.json({productID :id});
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/edit_product', (req, res) => {
        DB.editProduct(req.body).then(function() {
            res.send("ok");
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/remove_product', (req, res) => {
        DB.removeProduct(req.body).then(function() {
            res.send("ok");
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.post('/remove_category', (req, res) =>{
        DB.handleCategory(req.body.id).then(function(items) {
            res.json(items);
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.get('/get_products', (req, res) => {
        DB.getProducts().then(function(items) {
            res.json(items);
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });

    app.get('/get_categories', (req, res) => {
        DB.getCategories().then(function(items) {
            res.json(items);
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });
    });
};
