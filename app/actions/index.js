import {
    OPEN_ADD_PRODUCT_MODAL,
    CLOSE_ADD_PRODUCT_MODAL,
    CLOSE_ADD_CATEGORY_MODAL,
    OPEN_ADD_CATEGORY_MODAL,
    OPEN_DELETE_CATEGORY_MODAL,
    CLOSE_DELETE_CATEGORY_MODAL
} from '../constants/index'

export const openProductModal = () => {
    return {
        type: OPEN_ADD_PRODUCT_MODAL,
        openAddProductModal : true
    }
};

export const closeProductModal = () => {
    return {
        type: CLOSE_ADD_PRODUCT_MODAL,
        openAddProductModal : false
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
        type: CLOSE_ADD_CATEGORY_MODAL,
        openAddCategoryModal : false
    }
};

export const openDeleteCategoryModal = () => {
    return {
        type: OPEN_DELETE_CATEGORY_MODAL,
        openDeleteCategoryModal : true
    }
};

export const closeDeleteCategoryModal = () => {
    return {
        type: CLOSE_DELETE_CATEGORY_MODAL,
        openDeleteCategoryModal : false
    }
};