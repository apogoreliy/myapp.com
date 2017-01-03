import axios from 'axios';

const ROOT_URL = location.host === 'localhost:3000' ? 'http://localhost:3000' : 'https://warm-garden-46587.herokuapp.com';

export default {
    editProduct (productID, categoryID, name, purchasePrice, price){
        axios.post(`${ROOT_URL}/edit_product`, {productID, categoryID, name, purchasePrice, price})
            .catch(err => { console.log('err', err) });
    },

    removeProduct (id){
        axios.post(`${ROOT_URL}/remove_product`, {id})
            .catch(err => { console.log('err', err) });
    },

    fetchProducts (callback) {
        axios.get(`${ROOT_URL}/get_products`)
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    removeCategory(id, callback){
        axios.post(`${ROOT_URL}/remove_category`, {id})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    addCategory (name, callback){
        axios.post(`${ROOT_URL}/add_category`, {name})
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    fetchCategories (callback){
        axios.get(`${ROOT_URL}/get_categories`)
            .then(response => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    addProduct (categoryID, name, purchasePrice, price, callback){
        axios.post(`${ROOT_URL}/add_product`, {categoryID, name, purchasePrice, price})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    auth (type, login, password, callback){
        axios.post(`${ROOT_URL}/auth`, {type, login, password})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    checkAuth (token, callback){
        axios.post(`${ROOT_URL}/check_auth`, {token})
            .then((response) => {
                callback(response);
            })
            .catch(err => {
                console.log('err', err)
            });
    },

    searchProducts(searchField, callback){
        axios.post(`${ROOT_URL}/search_products`, {searchField})
            .then((response) => {
                callback(response);
            })
            .catch(err =>{
                console.log('err', err)
            });
    }
};