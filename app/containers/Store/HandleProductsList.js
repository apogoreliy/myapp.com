import { connect } from 'react-redux'
import { openEditProductModal, openDeleteProductModal, fetchProducts, closeRemindModal } from '../../actions/Store/index'
import ProductList from '../../components/Store/ProductsList';

const mapStateToProps = (state) => {
    return {
        products: state.product.prods ? state.product.prods.filter( p => {
            return parseInt(p.categoryID) === (
                state.category.selectedCategory ||
                (state.product.prods && Object.keys(state.product.prods).length !== 0 ? state.product.prods[0]['categoryID'] : 0)
                )
        }) : null,
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