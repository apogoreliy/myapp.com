import Pagination from '../components/common/Pagination';
import { connect } from 'react-redux';
import {changePage} from '../actions/Store/index';
import services from '../utils/services';
import * as constants from '../utils/constants';

const mapStateToProps = (state) => {
    let totalPages = 0, countProds = 0;

    if(state.product.prods) {
        countProds = services.filterProducts(state.product.prods, state.category.selectedCategory);

        if (countProds.length > 0) {
            totalPages = ((countProds.length - 1) / constants.COUNT_ITEMS_ON_PAGE) + 1;
            totalPages = totalPages - (totalPages % 1);
        }
    }

    return{
        totalPages: totalPages,
        maximumPages : constants.COUNT_PAGES_IN_PAGINATION,
        currentPage : state.product.page || 1
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (page) => {
            dispatch(changePage(page));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

