import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import HandleHandler from '../../containers/Store/HandleHandler';
import HandleProductsList from '../../containers/Store/HandleProductsList';
import HandleCategoriesList from '../../containers/Store/HandleCategoriesList';
import Spinner from '../common/Spinner';

const StorePage = ({loaded}) => (
    <div className="container">
        <HandleHandler />
        <HandleCategoriesList />
        <HandleProductsList />
        <Spinner loaded={loaded}/>
    </div>
);

StorePage.propTypes = {
    loaded : PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        loaded : state.product.loaded
    }
};

export default  connect(
    mapStateToProps
)(StorePage);