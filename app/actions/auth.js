import * as actions from './types';
import utils from '../utils/index';
import { browserHistory} from 'react-router';

export const openAuthModalToSignIn = () => {
    return {
        type: actions.OPEN_AUTH_MODAL_TO_SIGNIN,
        openSignInModal : true,
        openSignUpModal : false,
        error : false
    }
};

export const openAuthModalToSignUp = () => {
    return {
        type: actions.OPEN_AUTH_MODAL_TO_SIGNUP,
        openSignUpModal : true,
        openSignInModal : false,
        error : false
    }
};

export const closeAuthModal = () => {
    return {
        type: actions.CLOSE_AUTH_MODAL,
        openSignUpModal : false,
        openSignInModal : false,
        error : false
    }
};

export const auth = (type, login, password) => {
    return dispatch =>{
        utils.auth(type, login, password, response => {
            if(response.data.error){
                dispatch({
                    type: actions.AUTH,
                    loggedIn : false,
                    error : response.data.error
                });
            }
            else if(response.data.token){
                dispatch(closeAuthModal());

                localStorage.setItem('soshace', response.data.token);

                dispatch({
                    type: actions.AUTH,
                    loggedIn : true,
                    error : false
                });
            }
        });
    }
};

export const checkAuth = () => {
    return dispatch =>{
        var token = localStorage.getItem('soshace');
        if(token) {
            utils.checkAuth(token, response => {
                dispatch({
                    type: actions.AUTH,
                    loggedIn : response
                });
            });
        }
        else{
            dispatch({
                type: actions.AUTH,
                loggedIn : false
            });
        }
    }
};

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('soshace');

        dispatch({
            type: actions.SIGN_OUT,
            loggedIn : false
        });
    }
};