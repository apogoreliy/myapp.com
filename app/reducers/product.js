import {
    OPEN_ADD_PRODUCT_MODAL,
    CLOSE_PRODUCT_MODAL,
    OPEN_EDIT_PRODUCT_MODAL,
    OPEN_DELETE_PRODUCT_MODAL,
    CLOSE_DELETE_MODAL,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    REMOVE_PRODUCT,
    GET_PRODUCTS
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
                productID : null
            });
        case ADD_PRODUCT:
            let prod = state.prods ? state.prods : "";
            return Object.assign({}, state, {
                prods : [...prod, action]
            });
        case GET_PRODUCTS:
            return Object.assign({}, state, action.products);

        case EDIT_PRODUCT:
            prod = state.prods.map( p =>{
                if(p.productID === state.productID){
                    let pr = action;
                    pr.productID = p.productID;
                    return pr;
                }
                return p;
            });
            return Object.assign({}, state, {
                prods : [...prod]
            });
        case REMOVE_PRODUCT:
            let p = state.prods.filter( f => {
                return f.productID !== state.productID;
            });

            return Object.assign({}, state, {
                prods : [...p]
            });
    }
    return state;
};