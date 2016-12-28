import {connect} from 'react-redux';
import { closeProductModal, addProduct, editProduct } from '../../actions/Store/index';
import ProductModal from '../../components/Store/ProductModal';

const mapStateToProps = (state) => {
    return {
        productID : state.product.productID,
        mode : state.product.openAddProductModal,
        product: state.product.openEditProductModal ?
            state.product.prods.filter( p => { return p.productID === state.product.productID } ) :
            null,
        categories : state.category.cats,
        selectedCategory : state.category.selectedCategory,
        headerTitle : state.product.openAddProductModal ? "Добавить товар" : "Изменить товар"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeProductModal: () => {
            dispatch(closeProductModal())
        },
        addProduct : (categoryID, name, purchasePrice, price) => {
            dispatch(addProduct(categoryID, name, purchasePrice, price))
        },
        editProduct : (productID, categoryID, name, purchasePrice, price) => {
            dispatch(editProduct(productID, categoryID, name, purchasePrice, price))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);