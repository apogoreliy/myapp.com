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
                        var productID = !i[0] ? 0 : ++i[0]['productID'];
                        collection.insert({name : product.name, productID: parseInt(productID), purchasePrice : product.purchasePrice,
                            price: product.price, categoryID: parseInt(product.categoryID)}, function(err) {
                            err ? reject(err) : resolve(parseInt(productID));
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
                        var categoryID = !i[0] ? 0 : ++i[0]['categoryID'];
                        collection.insert({name : category.name, categoryID: parseInt(categoryID)}, function(err) {
                            err ? reject(err) : resolve(parseInt(categoryID));
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
            collectionProds.find({categoryID: id}).forEach(
                function () {
                    resolve(true);
                },
                function () {
                    resolve(false);
                }
            );
        });
    },

    checkIfWithoutCategoryExist: function(collection){
        return new Promise(function(resolve, reject) {
            collection.find({name: "Без категории"}).toArray(function (err, category) {
                if(err) { reject(err) }
                else{
                    if(!category[0]){ resolve(false);}
                    else{
                        resolve(category[0]['categoryID']);
                    }
                }
            });
        });
    },

    createWithoutCategory : function(id, collection){
        return new Promise(function(resolve, reject) {
            collection.find().sort({categoryID: -1}).limit(1).toArray(function (err, category) {
                var categoryID = !category[0] ? 0 : ++category[0]['categoryID'];
                collection.insert({name: "Без категории", categoryID: parseInt(categoryID)},
                    function (err) {
                        if (err) { reject(err) }
                        else {
                            resolve(categoryID);
                        }
                    });
            });
        });
    },

    updateProductsByCategory : function(collection, currentId, withoutCategoryId){
        return new Promise(function(resolve, reject) {
            if(withoutCategoryId) {
                const cursor = collection.find({categoryID: currentId});

                cursor.forEach(
                    function (product) {
                        collection.updateOne(
                            {productID: parseInt(product.productID)},
                            {$set: {categoryID: parseInt(withoutCategoryId)}},
                            function (err) {
                                if (err) {
                                    reject(err)
                                }
                                else {
                                    resolve()
                                }
                            }
                        );
                    },
                    function () {
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
            collection.remove({categoryID: id}, function (err) {
                err ? reject(err) : resolve();
            });
        });
    },

    removeCategory : function(id, collection){
        return new Promise(function(resolve, reject) {
            collection.deleteOne({categoryID: id}, function (err) {
                if(err){
                    reject(err)
                } else{
                    resolve();
                }
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
    }

};