import {
    CLOSE_CATEGORY_MODAL,
    OPEN_ADD_CATEGORY_MODAL,
    OPEN_DELETE_CATEGORY_MODAL,
    CLOSE_DELETE_MODAL,
    SELECT_CATEGORY
} from '../constants/index';

const category = (state = {}, action) => {
    switch (action.type) {
        case CLOSE_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openAddCategoryModal : action.openAddCategoryModal
            });
        case OPEN_ADD_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openAddCategoryModal : action.openAddCategoryModal
            });
        case OPEN_DELETE_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openDeleteCategoryModal : action.openDeleteCategoryModal
            });
        case CLOSE_DELETE_MODAL:
            return Object.assign({}, state, {
                openDeleteCategoryModal : action.openDeleteCategoryModal
            });
        case SELECT_CATEGORY:
            return Object.assign({}, state, {
                selected_category : action.selected_category
            });
    }
    return state;
};

export default category;