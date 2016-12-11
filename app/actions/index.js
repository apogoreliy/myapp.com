import {
    OPEN_ADD_PRODUCT_MODAL,
    CLOSE_PRODUCT_MODAL,
    CLOSE_CATEGORY_MODAL,
    OPEN_ADD_CATEGORY_MODAL,
    OPEN_DELETE_CATEGORY_MODAL,
    CLOSE_DELETE_MODAL,
    SELECT_CATEGORY,
    OPEN_EDIT_PRODUCT_MODAL,
    OPEN_DELETE_PRODUCT_MODAL,
    ADD_PRODUCT,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    EDIT_PRODUCT,
    REMOVE_PRODUCT,
    GET_PRODUCTS,
    GET_CATEGORIES
} from './types';
import axios from 'axios';
//const ROOT_URL = process.env.PORT || 3000;
const ROOT_URL = 'http://localhost:3000';

export const openProductModal = () => {
    return {
        type: OPEN_ADD_PRODUCT_MODAL,
        openAddProductModal : true
    }
};

export const closeProductModal = () => {
    return {
        type: CLOSE_PRODUCT_MODAL,
        openAddProductModal : false,
        openEditProductModal: false
    }
};

export const openCategoryModal = () => {
    return {
        type: OPEN_ADD_CATEGORY_MODAL,
        openAddCategoryModal : true
    }
};

export const closeCategoryModal = () => {
    return {
        type: CLOSE_CATEGORY_MODAL,
        openAddCategoryModal : false
    }
};

export const openDeleteCategoryModal = (id) => {
    return {
        type: OPEN_DELETE_CATEGORY_MODAL,
        openDeleteCategoryModal : true,
        categoryID : id
    }
};

export const closeDeleteModal = () => {
    return {
        type: CLOSE_DELETE_MODAL,
        openDeleteCategoryModal : false,
        openDeleteProductModal : false
    }
};

export const selectCategory = (selectedCategory) => {
    return {
        type: SELECT_CATEGORY,
        selectedCategory
    }
};

export const openEditProductModal = (id) => {
    return {
        type: OPEN_EDIT_PRODUCT_MODAL,
        openEditProductModal : true,
        productID : id
    }
};

export const openDeleteProductModal = (id) => {
    return {
        type: OPEN_DELETE_PRODUCT_MODAL,
        openDeleteProductModal : true,
        productID : id
    }
};

let productID = 0;
export const addProduct = (category, name, purchasePrice, price) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/add_product`, {a:1})
            .then(() => {
                dispatch({
                    type: ADD_PRODUCT,
                    category,
                    name,
                    purchasePrice,
                    price,
                    productID: productID++
                });
                dispatch(closeProductModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const editProduct = (category, name, purchasePrice, price) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/edit_product`, {a:1})
            .then(() => {
                dispatch({
                    type: EDIT_PRODUCT,
                    category,
                    name,
                    purchasePrice,
                    price
                });

                dispatch(closeProductModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const removeProduct = () => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/remove_product`, {a:1})
            .then(response => {
                dispatch({
                    type: REMOVE_PRODUCT
                });

                dispatch(closeDeleteModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const removeCategory = () => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/remove_category`, {a:1})
            .then(response => {
                dispatch({
                    type: REMOVE_CATEGORY
                });

                dispatch(closeDeleteModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

let categoryID = 0;
export const addCategory = (name) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/add_category`, {a:1})
            .then(response => {
                console.log('fetch', response);
                dispatch({
                    type: ADD_CATEGORY,
                    name,
                    categoryID : categoryID++
                });
                dispatch(closeCategoryModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const fetchProducts = () => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/get_products`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS,
                    products: response.data
                });
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const fetchCategories = () => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/get_categories`)
            .then(response => {
                dispatch({
                    type: GET_CATEGORIES,
                    categories: response.data
                });
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};