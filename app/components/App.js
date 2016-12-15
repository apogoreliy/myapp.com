import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import HandleHeader from '../containers/HandleHeader';
import Body from './Body';
import Spinner from './Spinner';

const App = ({loaded}) => (
    <div className="container">
        <HandleHeader />
        <Body/>
        <Spinner loaded={loaded}/>
    </div>
);

App.propTypes = {
    loaded : PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        loaded : state.product.loaded
    }
};

export default  connect(
    mapStateToProps
)(App);