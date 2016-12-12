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
    let categories = state.cats ? state.cats : "";
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
                categoryID : action.categoryID
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
                cats : [...categories, action]
            });

        case REMOVE_CATEGORY:
        case GET_CATEGORIES:
            return Object.assign({}, state, action.categories);
    }
    return state;
};