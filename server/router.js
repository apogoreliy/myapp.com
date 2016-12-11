const DB = require('./db');

module.exports = (app) =>{
    app.post('/add_category', (req, res)=> {
        DB.addCategory(req.body);
    });

    app.post('/add_product', (req, res)=> {
        DB.addProduct(req.body);
    });

    app.post('/edit_product', (req, res)=> {
        DB.editProduct(req.body);
    });

    app.post('/remove_product', (req, res)=> {
        DB.removeProduct(req.body);
    });

    app.post('/remove_category', (req, res) =>{
        DB.removeCategory(req.body);
    });

    app.post('/get_products', (req, res) => {
        DB.getProducts(function(r){
            res.json(r);
        });
    });

    app.post('/get_categories', (req, res) => {
        /*
        DB.getCategories(function(r){
            console.log('rrrrrrrrrrrrr', r);
            res.json(r);
        });
        */

        //console.info('The promise was fulfilled with items!', DB.getCategories());

        DB.getCategories().then(function(items) {
            console.info('The promise was fulfilled with items!', items);
            res.json(items);
        }, function(err) {
            console.error('The promise was rejected', err, err.stack);
        });

    });
};
