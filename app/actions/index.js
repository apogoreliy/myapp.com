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
    REMOVE_PRODUCT
} from '../constants/index';

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
        dispatch({
            type: ADD_PRODUCT,
            category,
            name,
            purchasePrice,
            price,
            productID: productID++
        });
        dispatch(closeProductModal());
    }
};

export const editProduct = (category, name, purchasePrice, price) => {
    return function(dispatch) {
        dispatch({
            type: EDIT_PRODUCT,
            category,
            name,
            purchasePrice,
            price
        });

        dispatch(closeProductModal());
    }
};

export const removeProduct = () => {
    return function(dispatch) {
        dispatch({
            type: REMOVE_PRODUCT
        });

        dispatch(closeDeleteModal());
    }
};

export const removeCategory = () => {
    return function(dispatch) {
        dispatch({
            type: REMOVE_CATEGORY
        });

        dispatch(closeDeleteModal());
    }
};

let categoryID = 0;
export const addCategory = (name) => {
    return function(dispatch) {
        dispatch({
            type: ADD_CATEGORY,
            name,
            categoryID : categoryID++
        });

        dispatch(closeCategoryModal());
    }
};