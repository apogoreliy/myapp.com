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

//general actions
export const closeDeleteModal = () => {
    return {
        type: CLOSE_DELETE_MODAL,
        openDeleteCategoryModal : false,
        openDeleteProductModal : false
    }
};

//action for products
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

export const addProduct = (categoryID, name, purchasePrice, price) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/add_product`, {categoryID, name, purchasePrice, price})
            .then((response) => {
                dispatch({
                    type: ADD_PRODUCT,
                    categoryID,
                    name,
                    purchasePrice,
                    price,
                    productID: response.data.productID
                });
                dispatch(closeProductModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const editProduct = (productID, categoryID, name, purchasePrice, price) => {
    return function(dispatch) {
        console.log(productID, categoryID, name, purchasePrice, price);
        axios.post(`${ROOT_URL}/edit_product`, {productID, categoryID, name, purchasePrice, price})
            .then(() => {
                dispatch({
                    type: EDIT_PRODUCT,
                    categoryID,
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

export const removeProduct = (id) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/remove_product`, {id})
            .then(() => {
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

export const fetchProducts = () => {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/get_products`)
            .then(response => {
                dispatch({
                    type: GET_PRODUCTS,
                    products: {prods :response.data}
                });
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

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


//action for categories
export const removeCategory = (id) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/remove_category`, {id})
            .then(() => {
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

export const addCategory = (name) => {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/add_category`, {name})
            .then(response => {
                dispatch({
                    type: ADD_CATEGORY,
                    name,
                    categoryID : response.data.categoryID
                });
                dispatch(closeCategoryModal());
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const fetchCategories = () => {
    return function(dispatch) {
        axios.get(`${ROOT_URL}/get_categories`)
            .then(response => {
                dispatch({
                    type: GET_CATEGORIES,
                    categories: {cats : response.data}
                });
            })
            .catch(err => {
                console.log('err', err)
            });
    }
};

export const selectCategory = (selectedCategory) => {
    return {
        type: SELECT_CATEGORY,
        selectedCategory
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