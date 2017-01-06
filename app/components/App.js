import React, {PropTypes} from 'react';
import Navbar from './Navbar';
import HandleAuthModal from '../containers/HandleAuthModal';

const App = ({children, showAuthModal}) => (
    <div>
        <Navbar />
        { showAuthModal && <HandleAuthModal /> }
        {children}
    </div>
);

App.propTypes = {
    children : PropTypes.any,
    showAuthModal : PropTypes.bool
};

export default App;