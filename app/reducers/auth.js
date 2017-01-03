import * as actions from '../constants';

export default (state = {}, action) => {

    switch (action.type) {
        case actions.CLOSE_AUTH_MODAL:
        case actions.OPEN_AUTH_MODAL_TO_SIGNUP:
        case actions.OPEN_AUTH_MODAL_TO_SIGNIN:
            return Object.assign({}, state, {
                openSignInModal : action.openSignInModal,
                openSignUpModal : action.openSignUpModal,
                error : action.error
            });
        case actions.AUTH:
            return Object.assign({}, state, {
                loggedIn : action.loggedIn,
                error : action.error
            });
        case actions.SIGN_OUT:
            return Object.assign({}, state, {
                loggedIn : action.loggedIn
            });
    }
    return state;
};