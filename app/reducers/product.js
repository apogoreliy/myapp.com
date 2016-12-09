import {OPEN_ADD_PRODUCT_MODAL, CLOSE_ADD_PRODUCT_MODAL} from '../constants/index';

const productModal = (state = {}, action) => {
    switch (action.type) {
        case OPEN_ADD_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal
            });
        case CLOSE_ADD_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal
            });
    }
    return state;
};

export default productModal;