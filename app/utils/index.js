import axios from 'axios';

//const ROOT_URL = 'http://localhost:3000';
const ROOT_URL = 'https://warm-garden-46587.herokuapp.com';

module.exports = {
    editProduct : function(productID, categoryID, name, purchasePrice, price){
        axios.post(`${ROOT_URL}/edit_product`, {productID, categoryID, name, purchasePrice, price})
            .catch(err => { console.log('err', err) });
    },

    removeProduct : function(id){
        axios.post(`${ROOT_URL}/remove_product`, {id})
            .catch(err => { console.log('err', err) });
    },

    fetchProducts : function (callback) {
        axios.get(`${ROOT_URL}/get_products`)
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    removeCategory : function(id, callback){
        axios.post(`${ROOT_URL}/remove_category`, {id})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    addCategory : function(name, callback){
        axios.post(`${ROOT_URL}/add_category`, {name})
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    fetchCategories : function(callback){
        axios.get(`${ROOT_URL}/get_categories`)
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    addProduct : function(categoryID, name, purchasePrice, price, callback){
        axios.post(`${ROOT_URL}/add_product`, {categoryID, name, purchasePrice, price})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    auth : function(type, login, password, callback){
        axios.post(`${ROOT_URL}/auth`, {type, login, password})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    checkAuth : function(token, callback){
        axios.post(`${ROOT_URL}/check_auth`, {token})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};