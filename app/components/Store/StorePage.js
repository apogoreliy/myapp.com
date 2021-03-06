import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import HandleHeader from '../../containers/Store/HandleHeader';
import HandleProductsList from '../../containers/Store/HandleProductsList';
import HandleCategoriesList from '../../containers/Store/HandleCategoriesList';
import Spinner from '../common/Spinner';
import HandlePagination from '../../containers/HandlePagination';

const StorePage = ({loaded}) => (
    <div className="container">
        <HandleHeader />
        <HandleCategoriesList />
        <HandleProductsList />
        <HandlePagination />
        <Spinner loaded={loaded}/>
    </div>
);

StorePage.propTypes = {
    loaded : PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        loaded : state.product.loaded || state.category.loaded
    }
};

export default  connect(
    mapStateToProps
)(StorePage);