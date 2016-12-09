import {
    OPEN_ADD_PRODUCT_MODAL,
    CLOSE_PRODUCT_MODAL,
    OPEN_EDIT_PRODUCT_MODAL,
    OPEN_DELETE_PRODUCT_MODAL,
    CLOSE_DELETE_MODAL
} from '../constants/index';

const productModal = (state = {}, action) => {
    switch (action.type) {
        case OPEN_ADD_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal
            });
        case CLOSE_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal,
                openEditProductModal: action.openEditProductModal
            });
        case OPEN_EDIT_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openEditProductModal : action.openEditProductModal
            });
        case OPEN_DELETE_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openDeleteProductModal : action.openDeleteProductModal
            });
        case CLOSE_DELETE_MODAL:
            return Object.assign({}, state, {
                openDeleteProductModal : action.openDeleteProductModal
            });
    }
    return state;
};

export default productModal;