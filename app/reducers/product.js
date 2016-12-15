import {
    OPEN_ADD_PRODUCT_MODAL,
    CLOSE_PRODUCT_MODAL,
    OPEN_EDIT_PRODUCT_MODAL,
    OPEN_DELETE_PRODUCT_MODAL,
    CLOSE_DELETE_MODAL,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    REMOVE_PRODUCT,
    GET_PRODUCTS,
    OPEN_REMIND_MODAL,
    CLOSE_REMIND_MODAL,
    STOP_LOAD,
    START_LOAD
} from '../actions/types';

export default (state = {}, action) => {

    switch (action.type) {
        case OPEN_ADD_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal
            });

        case CLOSE_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal,
                openEditProductModal: action.openEditProductModal,
                productID:null
            });

        case OPEN_EDIT_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openEditProductModal : action.openEditProductModal,
                productID : action.productID
            });

        case OPEN_DELETE_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openDeleteProductModal : action.openDeleteProductModal,
                productID : action.productID
            });

        case CLOSE_DELETE_MODAL:
            return Object.assign({}, state, {
                openDeleteProductModal : action.openDeleteProductModal,
                productID : action.productID
            });

        case ADD_PRODUCT:
            return Object.assign({}, state, {
                prods : [...state.prods, action]
            });

        case GET_PRODUCTS:
            return Object.assign({}, state, action.products);

        case EDIT_PRODUCT:
            let prods = state.prods.map( p =>{
                if(p.productID === action.productID){
                    let pr = action;
                    pr.productID = p.productID;
                    return pr;
                }
                return p;
            });
            return Object.assign({}, state, {
                prods : [...prods]
            });

        case REMOVE_PRODUCT:
            let p = state.prods.filter( f => {
                return f.productID !== action.productID;
            });

            return Object.assign({}, state, {
                prods : [...p]
            });

        case OPEN_REMIND_MODAL:
        case CLOSE_REMIND_MODAL:
            return Object.assign({}, state, {
                openRemindModal : action.openRemindModal
            });

        case STOP_LOAD:
        case START_LOAD:
            return Object.assign({}, state, {loaded : action.loaded});
    }
    return state;
};