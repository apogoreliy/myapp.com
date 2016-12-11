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
                collection.insertMany(product, function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    addCategory : function(category){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('categories');
                collection.insertMany(category, function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    editProduct : function(product){
        // a:2 -> what we need to change
        // $set: {b:1} -> by what to change
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.updateOne({a:2},{$set:{b:1}}, function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    removeProduct: function(product){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.deleteOne(product, function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    removeCategory: function(category){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('categories');
                collection.deleteOne(category, function(err, items) {
                    err ? reject(err) : resolve(items);
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