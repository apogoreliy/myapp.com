import { connect } from 'react-redux';
import AuthPanel from '../components/AuthPanel'
import {openAuthModalToSignIn, openAuthModalToSignUp, signOut} from '../actions/auth'

const mapStateToProps = (store) => {
    return {
        loggedIn : store.auth.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openAuthModalToSignIn: () => {
            dispatch(openAuthModalToSignIn())
        },
        openAuthModalToSignUp : () => {
            dispatch(openAuthModalToSignUp())
        },
        signOut : () => {
            dispatch(signOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPanel);