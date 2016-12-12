// Connecting MongoDB
const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://apogoreliy:7spirits@ds131878.mlab.com:31878/myapp';
const Promise = require('rsvp').Promise;

module.exports = {
    connection : function() {
        return new Promise(function(resolve, reject) {
            MongoClient.connect(URL, function(err, db) {
                err ? reject(err) : resolve(db);
            });
        })
    },

    addProduct: function(product){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.find().sort({productID: -1}).limit(1).toArray(function(err, i) {
                    if(err){ reject(err) }
                    else{
                        var productID = !i[0]['productID'] ? 0 : ++i[0]['productID'];
                        collection.insert({name : product.name, productID: productID, purchasePrice : product.purchasePrice,
                            price: product.price, categoryID: product.categoryID}, function(err) {
                            err ? reject(err) : resolve(productID);
                        });
                    }
                });

            });
        });
    },

    addCategory : function(category){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('categories');
                collection.find().sort({categoryID: -1}).limit(1).toArray(function(err, i) {
                    if(err){ reject(err) }
                    else{
                        var categoryID = !i[0]['categoryID'] ? 0 : ++i[0]['categoryID'];
                        collection.insert({name : category.name, categoryID: categoryID}, function(err) {
                            err ? reject(err) : resolve(categoryID);
                        });
                    }
                });
            });
        });
    },

    editProduct : function(product){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.updateOne(
                    {productID : product.productID},
                    {$set:{categoryID:product.categoryID,
                    name:product.name, price:product.price, purchasePrice:product.purchasePrice}},
                    function(err, items) { err ? reject(err) : resolve(items);});
            });
        });
    },

    removeProduct: function(product){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.deleteOne({productID : product.id}, function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    removeCategory: function(id){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('categories');
                collection.deleteOne({categoryID : id}, function(err) {
                    err ? reject(err) : resolve();
                });
            });
        });
    },

    getProducts: function(){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.find().toArray(function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    getCategories: function(){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('categories');
                collection.find().toArray(function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    }

};