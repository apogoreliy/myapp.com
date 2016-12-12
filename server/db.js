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

    checkAndCreateWithoutCategory: function(db){
        return new Promise(function(resolve, reject) {
            const collection = db.collection('categories');
            collection.find({name: "Без категории"}).toArray(function (err, category) {
                console.log('checkAndCreateWithoutCategory');
                if(err) {
                    reject(err)
                }
                else{
                    if(!category[0]){
                        var categoryID = null;
                        collection.find().sort({categoryID: -1}).limit(1).toArray(function (err, category) {
                            categoryID = !category[0] ? 0 : ++category[0]['categoryID'];
                            collection.insert({name: "Без категории", categoryID: parseInt(categoryID)},
                                function (err) {
                                    if (err) {
                                        reject(err)
                                    }
                                    else{
                                        resolve(categoryID);
                                    }
                                });
                        });
                    }
                    else{
                        console.log('exist without', category[0]['categoryID']);
                        resolve(category[0]['categoryID']);
                    }
                }
            });
        });
    },

    getAndUpdateProductsByCategory : function(db, currentId, withoutCategoryId){
        return new Promise(function(resolve, reject) {
            const collection = db.collection('products');
            console.log('getAndUpdateProductsByCategory', withoutCategoryId);

            collection.find({categoryID: parseInt(currentId)}).forEach(function (product) {
                console.log('forEach', product);
                collection.updateOne(
                    {productID: parseInt(product.productID)},
                    {$set: {categoryID: parseInt(withoutCategoryId)}},
                    function (err) {
                        if(err){
                            reject(err)
                        }
                        else{
                            console.log('getAndUpdateProductsByCategory', withoutCategoryId);
                            resolve()
                        }
                });
            });
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

    removeWithoutCategory: function(db, id){
        const that =this;
        return new Promise(function(resolve, reject) {
            console.log('removeWithoutCategory');
            db.collection('products').remove({categoryID: parseInt(id)}, function (err) {
                console.log('removeWithoutCategory', withoutCategoryId);
                err ? reject(err) : resolve();
            });
        });
    },

    removeCategory : function(id, db){
        return new Promise(function(resolve, reject) {
            console.log('removeCategory');
            db.collection('categories').deleteOne({categoryID: parseInt(id)}, function (err) {
                console.log('removeCategory', id);
                if(err){
                    reject(err)
                } else{
                    resolve();
                }
            });
        });
    },

    handleCategory: function(id){
        const that =this;
        return new Promise(function(resolve, reject) {
            console.log('id', id);
            that.connection().then(function (db) {
                if(id === categoryID){
                    console.log('remove without');
                    that.removeWithoutCategory(db, id).then(function () {
                        console.log('test');
                    });
                }
                that.removeCategory(id, db).then(function () {
                    console.log('test remove');
                });

                that.checkAndCreateWithoutCategory(db).then(function(categoryID){
                    that.getAndUpdateProductsByCategory(db, id, categoryID).then(function () {
                        /*
                        if(id === categoryID){
                            console.log('remove without');
                            that.removeWithoutCategory(db, id);
                        }
                        that.removeCategory(id, db);
                        */
                        that.getCategoriesAndProducts().then(function(obj){
                            console.log('obj', obj);
                            resolve(obj);
                        });
                    });
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