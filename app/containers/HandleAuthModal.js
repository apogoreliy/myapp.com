import {connect} from 'react-redux';
import { auth, closeAuthModal } from '../actions/auth';
import AuthModal from '../components/AuthModal';

const mapStateToProps = (state) => {
    return {
        mode : state.auth.openSignUpModal,
        error : state.auth.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (type, login, password) => {
            dispatch(auth(type, login, password))
        },
        closeAuthModal : () => {
            dispatch(closeAuthModal())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);