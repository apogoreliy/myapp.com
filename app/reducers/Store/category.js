import * as actions from '../../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case actions.CLOSE_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openAddCategoryModal : action.openAddCategoryModal
            });

        case actions.OPEN_ADD_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openAddCategoryModal : action.openAddCategoryModal,
                categoryID: action.categoryID
            });

        case actions.OPEN_DELETE_CATEGORY_MODAL:
            return Object.assign({}, state, {
                openDeleteCategoryModal : action.openDeleteCategoryModal,
                categoryID : action.categoryID
            });

        case actions.CLOSE_DELETE_MODAL:
            return Object.assign({}, state, {
                openDeleteCategoryModal : action.openDeleteCategoryModal,
                categoryID : action.categoryID
            });

        case actions.SELECT_CATEGORY:
            return Object.assign({}, state, {
                selectedCategory : action.selectedCategory
            });

        case actions.ADD_CATEGORY:
            return Object.assign({}, state, { cats : [...state.cats, action]});

        case actions.REMOVE_CATEGORY:
        case actions.GET_CATEGORIES:
            return Object.assign({}, state, action.categories, action.openRemindModal);
    }
    return state;
};