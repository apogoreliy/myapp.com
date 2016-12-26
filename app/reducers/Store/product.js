import * as actions from '../../actions/types';

export default (state = {}, action) => {

    switch (action.type) {
        case actions.OPEN_ADD_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal
            });

        case actions.CLOSE_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openAddProductModal : action.openAddProductModal,
                openEditProductModal: action.openEditProductModal,
                productID:null
            });

        case actions.OPEN_EDIT_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openEditProductModal : action.openEditProductModal,
                productID : action.productID
            });

        case actions.OPEN_DELETE_PRODUCT_MODAL:
            return Object.assign({}, state, {
                openDeleteProductModal : action.openDeleteProductModal,
                productID : action.productID
            });

        case actions.CLOSE_DELETE_MODAL:
            return Object.assign({}, state, {
                openDeleteProductModal : action.openDeleteProductModal,
                productID : action.productID
            });

        case actions.ADD_PRODUCT:
            return Object.assign({}, state, {
                prods : [...state.prods, action]
            });

        case actions.GET_PRODUCTS:
            return Object.assign({}, state, action.products);

        case actions.EDIT_PRODUCT:
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

        case actions.REMOVE_PRODUCT:
            let p = state.prods.filter( f => {
                return f.productID !== action.productID;
            });

            return Object.assign({}, state, {
                prods : [...p]
            });

        case actions.OPEN_REMIND_MODAL:
        case actions.CLOSE_REMIND_MODAL:
            return Object.assign({}, state, {
                openRemindModal : action.openRemindModal
            });

        case actions.STOP_LOAD:
        case actions.START_LOAD:
            return Object.assign({}, state, {loaded : action.loaded});
    }
    return state;
};