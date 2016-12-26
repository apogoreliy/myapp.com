import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import AuthModal from '../containers/modals/AuthModal';

const App = ({children, showAuthModal}) => (
    <div>
        <Navbar />
        { showAuthModal && <AuthModal /> }
        {children}
    </div>
);

App.propTypes = {
    children : PropTypes.any.isRequired,
    showAuthModal : PropTypes.bool
};

const mapStateToProps = (state, props) => {
    return {
        showAuthModal : state.auth.openSignInModal || state.auth.openSignUpModal,
        children : props.children
    }
};

export default  connect(
    mapStateToProps
)(App);