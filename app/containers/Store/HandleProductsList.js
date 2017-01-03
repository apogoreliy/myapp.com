import { connect } from 'react-redux'
import { openEditProductModal, openDeleteProductModal, fetchProducts, closeRemindModal } from '../../actions/Store/index'
import ProductList from '../../components/Store/ProductsList';
import services from '../../utils/services';
import * as constants from '../../constants';

const mapStateToProps = (state) => {
    let products = null, page = (state.product.page ? parseInt(state.product.page) : 1),
        num = constants.COUNT_ITEMS_ON_PAGE, start = page * num - num;

    if(state.product.prods){
        let tempArr = services.filterProducts(state.product.prods, state.category.selectedCategory);
        products = tempArr.slice(start, num*page);
    }

    return {
        products: products,
        openDeleteProductModal : state.product.openDeleteProductModal,
        openProductModal : (state.category.cats && Object.keys(state.category.cats).length !== 0 ) && (state.product.openAddProductModal || state.product.openEditProductModal),
        openRemindModal : state.product.openRemindModal,
        remindModalText : "Перед тем как добавить товар, необходимо создать категорию для товара"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (id) => {
            dispatch(openEditProductModal(id))
        },
        remove : (id) => {
            dispatch(openDeleteProductModal(id))
        },
        fetchProducts: () => {
            dispatch(fetchProducts())
        },
        closeRemindModal : () => {
            dispatch(closeRemindModal());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);