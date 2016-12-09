import {
    OPEN_ADD_PRODUCT_MODAL,
    CLOSE_PRODUCT_MODAL,
    CLOSE_CATEGORY_MODAL,
    OPEN_ADD_CATEGORY_MODAL,
    OPEN_DELETE_CATEGORY_MODAL,
    CLOSE_DELETE_MODAL,
    SELECT_CATEGORY,
    OPEN_EDIT_PRODUCT_MODAL,
    OPEN_DELETE_PRODUCT_MODAL
} from '../constants/index'

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
    console.log('act');
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