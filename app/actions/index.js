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
import utils from '../utils/index';

//general actions
export const closeDeleteModal = () => {
    return {
        type: CLOSE_DELETE_MODAL,
        openDeleteCategoryModal : false,
        openDeleteProductModal : false,
        productID : null,
        categoryID : null
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
        dispatch(closeProductModal());

        utils.addProduct(categoryID, name, purchasePrice, price, function(response){
            dispatch({
                type: ADD_PRODUCT,
                categoryID,
                name,
                purchasePrice,
                price,
                productID: response.data.productID
            });
        });
    }
};

export const editProduct = (productID, categoryID, name, purchasePrice, price) => {
    return function(dispatch) {
        dispatch(closeProductModal());
        dispatch({
            type: EDIT_PRODUCT,
            categoryID,
            name,
            purchasePrice,
            price,
            productID
        });

        utils.editProduct(productID, categoryID, name, purchasePrice, price);
    }
};

export const removeProduct = (id) => {
    return function(dispatch) {
        dispatch(closeDeleteModal());
        dispatch({
            type: REMOVE_PRODUCT,
            productID : id
        });

        utils.removeProduct(id);
    }
};

export const fetchProducts = () => {
    return function(dispatch) {
        utils.fetchProducts(function(response){
            dispatch({
                type: GET_PRODUCTS,
                products: {prods :response.data}
            });
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
        dispatch(closeDeleteModal());
        utils.removeCategory(id, function(response){
            dispatch({
                type: REMOVE_CATEGORY,
                categories: {cats : response.data.cats}
            });

            dispatch({
                type: GET_PRODUCTS,
                products: {prods : response.data.prods}
            });
        });
    }
};

export const addCategory = (name) => {
    return function(dispatch) {
        dispatch(closeCategoryModal());

        utils.addCategory(name, function (response) {
            dispatch({
                type: ADD_CATEGORY,
                name,
                categoryID : response.data.categoryID
            });
        });
    }
};

export const fetchCategories = () => {
    return function(dispatch) {
        utils.fetchCategories(function(response){
            dispatch({
                type: GET_CATEGORIES,
                categories: {cats : response.data}
            });
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