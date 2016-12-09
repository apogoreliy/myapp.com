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
    ADD_CATEGORY
} from '../constants/index';
import axios from 'axios';

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

export const openDeleteCategoryModal = () => {
    return {
        type: OPEN_DELETE_CATEGORY_MODAL,
        openDeleteCategoryModal : true
    }
};

export const closeDeleteModal = () => {
    return {
        type: CLOSE_DELETE_MODAL,
        openDeleteCategoryModal : false,
        openDeleteProductModal : false
    }
};

export const selectCategory = (selected_category) => {
    return {
        type: SELECT_CATEGORY,
        selected_category
    }
};

export const openEditProductModal = () => {
    return {
        type: OPEN_EDIT_PRODUCT_MODAL,
        openEditProductModal : true
    }
};

export const openDeleteProductModal = () => {
    return {
        type: OPEN_DELETE_PRODUCT_MODAL,
        openDeleteProductModal : true
    }
};

export const addProduct = (category, name, purchasePrice, price) => {
    return function(dispatch) {
        dispatch(closeProductModal());

/*
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good...
                // - Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', response.data.token);
                // - redirect to the route '/feature'
                browserHistory.push('/feature');
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user
                dispatch(authError('Bad Login Info'));
            });
*/
        //localStorage.setItem('products', {category:category, name:name, purchasePrice:purchasePrice, price:price});

        dispatch({
            type: ADD_PRODUCT,
            category,
            name,
            purchasePrice,
            price
        });
    }
};

export const editProduct = (id) => {
    return {
        type: SELECT_CATEGORY,
        edited_product_id : id
    }
};

export const removeProduct = (id) => {
    return {
        type: SELECT_CATEGORY,
        removed_product_id : id
    }
};

export const addCategory = (name) => {
    return function(dispatch) {
        dispatch(closeCategoryModal());

        /*
         axios.post(`${ROOT_URL}/signin`, { email, password })
         .then(response => {
         // If request is good...
         // - Update state to indicate user is authenticated
         dispatch({ type: AUTH_USER });
         // - Save the JWT token
         localStorage.setItem('token', response.data.token);
         // - redirect to the route '/feature'
         browserHistory.push('/feature');
         })
         .catch(() => {
         // If request is bad...
         // - Show an error to the user
         dispatch(authError('Bad Login Info'));
         });
         */
        //localStorage.setItem('products', {category:category, name:name, purchasePrice:purchasePrice, price:price});

        dispatch({
            type: ADD_CATEGORY,
            category,
            name,
            purchasePrice,
            price
        });
    }
};