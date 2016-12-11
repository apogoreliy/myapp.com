import {
    CLOSE_CATEGORY_MODAL,
    OPEN_ADD_CATEGORY_MODAL,
    OPEN_DELETE_CATEGORY_MODAL,
    CLOSE_DELETE_MODAL,
    SELECT_CATEGORY,
    ADD_CATEGORY,
    REMOVE_CATEGORY,
    GET_CATEGORIES
} from '../actions/types';

export default (state = {}, action) => {
    let categories = state.categories ? state.categories : "";
    switch (action.type) {
        case CLOSE_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openAddCategoryModal : action.openAddCategoryModal
            });
        case OPEN_ADD_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openAddCategoryModal : action.openAddCategoryModal,
                categoryID: action.categoryID
            });
        case OPEN_DELETE_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openDeleteCategoryModal : action.openDeleteCategoryModal,
                categoryID : action.categoryId
            });
        case CLOSE_DELETE_MODAL:
            return Object.assign({}, state, {
                openDeleteCategoryModal : action.openDeleteCategoryModal,
                categoryID : null
            });
        case SELECT_CATEGORY:
            return Object.assign({}, state, {
                selectedCategory : action.selectedCategory
            });
        case ADD_CATEGORY:
            return Object.assign({}, state, {
                categories : [...categories, action.name]
            });
        case REMOVE_CATEGORY:
            let c = state.categories ? state.categories.filter((f, index)=>{
                return index !== state.categoryID;
            }) : "";

            return Object.assign({}, state, {
                categories : [...c]
            });
        case GET_CATEGORIES:
            return Object.assign({}, state, {
                categories : [...categories, action.categories]
            });
    }
    return state;
};