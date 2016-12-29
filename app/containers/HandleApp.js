import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, props) => {
    return {
        showAuthModal : state.auth.openSignInModal || state.auth.openSignUpModal,
        children : props.children
    }
};

export default connect(mapStateToProps)(App);