// Connecting MongoDB
const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://apogoreliy:7spirits@ds131878.mlab.com:31878/myapp';
const Promise = require('rsvp').Promise;
const jwt = require('jwt-simple');
const config = require('./config');

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
                collection.find({}, {productID : 1, _id: 0}).sort({productID: -1}).limit(1).next(function(err, i) {
                    if(err){ reject(err) }
                    else{
                        var productID = !i ? 0 : ++i['productID'];
                        collection.insertOne({name : product.name, productID: parseInt(productID), purchasePrice : product.purchasePrice,
                            price: product.price, categoryID: parseInt(product.categoryID)}, function(err) {
                            err ? reject(err) : resolve(parseInt(productID));
                        });
                    }
                });
            });
        });
    },

    addCategory : function(category){
        const that = this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('categories');
                collection.find({}, {_id: 0}).sort({categoryID: -1}).toArray(function(err, items) {
                    if(err){ reject(err) }
                    else{
                        var categoryExist = false;
                        items.forEach((i)=>{
                            if(i.name === category.name) {
                                categoryExist = true;
                                resolve({categoryExist : true});
                            }
                        });

                        if(!categoryExist) {
                            var categoryID = !items ? 0 : ++items[0]['categoryID'];
                            collection.insertOne({ name: category.name, categoryID: parseInt(categoryID)}, function (err) {
                                err ? reject(err) : resolve(parseInt(categoryID));
                            });
                        }
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
                    {productID : parseInt(product.productID)},
                    {$set:{categoryID : parseInt(product.categoryID), name:product.name,
                        price:product.price, purchasePrice:product.purchasePrice}},
                    function(err, items) { err ? reject(err) : resolve(items);});
            });
        });
    },

    removeProduct: function(product){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.deleteOne({productID : parseInt(product.id)}, function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    checkIfCategoryHasProducts : function(id, collectionProds){
        return new Promise(function(resolve, reject) {
            collectionProds.find({categoryID: id}, {categoryID : 1, _id : 0}).limit(1).next(function(err, p){
                if(err) reject(err);
                resolve(p);
            });
        });
    },

    checkIfWithoutCategoryExist: function(collection){
        return new Promise(function(resolve, reject) {
            collection.find({name: "Без категории"}, {categoryID : 1, _id : 0}).next(function (err, category) {
                if(err) { reject(err) }
                resolve(!category ? false : category['categoryID']);
            });
        });
    },

    createWithoutCategory : function(id, collection){
        return new Promise(function(resolve, reject) {
            collection.find({}, {categoryID : 1, _id : 0}).sort({categoryID: -1}).limit(1).next(function (err, category) {
                var categoryID = !category ? 0 : ++category['categoryID'];
                collection.insertOne({name: "Без категории", categoryID: parseInt(categoryID)}, function (err) {
                    if (err) { reject(err) }
                    resolve(categoryID);
                });
            });
        });
    },

    updateProductsByCategory : function(collection, currentId, withoutCategoryId){
        return new Promise(function(resolve, reject) {
            if(withoutCategoryId) {
                collection.updateMany(
                    {categoryID: parseInt(currentId)}, {$set: {categoryID: parseInt(withoutCategoryId)}},
                    function (err) {
                        if (err) reject(err);
                        resolve();
                    }
                );
            }
            else{
                resolve();
            }
        });
    },

    getCategoriesAndProducts : function(){
        const that = this;
        return new Promise(function(resolve, reject) {
            var obj = {};
            that.getProducts().then(function (products) {
                that.getCategories().then(function(categories){
                    obj.cats = categories;
                    obj.prods = products;
                    resolve(obj);
                });
            });
        });
    },

    removeWithoutCategory: function(collection, id){
        return new Promise(function(resolve, reject) {
            collection.deleteOne({categoryID: id}, function (err) {
                err ? reject(err) : resolve();
            });
        });
    },

    removeCategory : function(id, collection){
        return new Promise(function(resolve, reject) {
            collection.deleteOne({categoryID: id}, function (err) {
                if(err) reject(err);
                resolve();
            });
        });
    },

    handleCategory: function(currentId){
        const that =this;
        var id = parseInt(currentId);
        return new Promise(function(resolve, reject) {
            that.connection().then(function (db) {
                var collCat = db.collection('categories');
                var collProd = db.collection('products');

                that.checkIfCategoryHasProducts (id, collProd).then(function(res){
                    if(res){
                        that.checkIfWithoutCategoryExist(collCat).then(function(exist){
                            if(exist){
                                if(id === exist) {
                                    that.removeWithoutCategory(collProd, id).then(function () {
                                    });

                                    that.removeCategory(id, collCat).then(function () {
                                        that.getCategoriesAndProducts().then(function (obj) {
                                            resolve(obj);
                                        });
                                    });
                                }
                                else {
                                    that.updateProductsByCategory(collProd, id, exist).then(function () {
                                        that.removeCategory(id, collCat).then(function () {
                                            that.getCategoriesAndProducts().then(function (obj) {
                                                resolve(obj);
                                            });
                                        });
                                    });
                                }
                            }
                            else{
                                that.createWithoutCategory(id, collCat).then(function(createdId){
                                    that.updateProductsByCategory(collProd, id, createdId).then(function(){
                                        if(id === createdId){
                                            that.removeWithoutCategory(collProd, id).then(function(){});
                                        }
                                        that.removeCategory(id, collCat).then(function(){
                                            that.getCategoriesAndProducts().then(function(obj){
                                                resolve(obj);
                                            });
                                        });
                                    })
                                });
                            }
                        });
                    }
                    else{
                        that.removeCategory(id, collCat).then(function () {
                            that.getCategoriesAndProducts().then(function(obj){
                                resolve(obj);
                            });
                        })
                    }
                });
            });
        });
    },

    getProducts: function(){
        const that =this;
        return new Promise(function(resolve, reject) {
            that.connection().then(function(db) {
                const collection = db.collection('products');
                collection.find({},{_id: 0}).toArray(function(err, items) {
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
                collection.find({},{_id: 0}).toArray(function(err, items) {
                    err ? reject(err) : resolve(items);
                });
            });
        });
    },

    checkIfUserExists: function(collection, login){
        return new Promise(function(resolve, reject) {
            collection.find({login}, {token : 1, _id : 0}).limit(1).next(function(err, user){
                if(err) { reject(err) }
                resolve(user);
            });
        });
    },

    auth : function (type, login, password) {
        const that =this;
        return new Promise(function(resolve, reject) {
            if (!login || !password) resolve({errorData : true});

            that.connection().then(function(db) {
                const collection = db.collection('user');
                var token = that.tokenForUser(login, password);

                that.checkIfUserExists(collection, login).then(function(user){
                    if(user && type === 'signUp'){
                        resolve({userExist : true});
                    }
                    else if(!user && type === 'signUp'){
                        collection.insertOne({login, token}, function (err) {
                            err ? reject(err) : resolve({token});
                        });
                    }
                    else if(user && type === 'signIn'){
                        resolve(token !== user.token ? {errorToken: true} : {token});
                    }
                    else if(!user && type === 'signIn'){
                        resolve({userUnexist : true});
                    }
                });
            });
        });
    },

    checkAuth : function(token){
        const that =this;
        return new Promise(function(resolve, reject) {
            if (!token) resolve({errorToken : true});

            that.connection().then(function(db) {
                db.collection('user').find({token}, {login : 1, _id : 0}).limit(1).next(function(err, user){
                    if(err) { reject(err) }
                    resolve(!user ? {errorToken : true} : {loggedIn : true});
                });
            });
        });
    },

    tokenForUser: function(login, password) {
        return jwt.encode({ password, login }, config.secret);
    }
};