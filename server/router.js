const DB = require('./db');

module.exports = (app) =>{
    app.post('/add_category', (req, res)=> {
        DB.addCategory(req.body).then(function(category) {
            if(category.categoryExist) res.json(category);
            res.json({categoryID:category});
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

    app.post('/auth', (req, res) => {
        DB.auth(req.body.type, req.body.login, req.body.password)
            .then(response => {
                if(response.errorData) {
                    res.send({error: 'You must provide email and password'});
                }
                else if(response.userUnexist || response.errorToken){
                    res.send({error: 'Wrong login or password'});
                }
                else if(response.userExist){
                    res.send({error: 'Email is in use'});
                }
                else if(response.token){
                    res.json(response);
                }
            })
            .catch(err => {
                console.error('The promise was rejected', err, err.stack);
            });
    });

    app.post('/check_auth', (req, res) => {
        DB.checkAuth(req.body.token)
            .then(response => {
                if(response.errorToken) {
                    res.send(false);
                }
                else if(response.loggedIn){
                    res.send(true);
                }
            })
            .catch(err => {
                console.error('The promise was rejected', err, err.stack);
            });
    });
};
