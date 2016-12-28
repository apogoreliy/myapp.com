import { connect } from 'react-redux';
import { closeDeleteModal, removeCategory, removeProduct } from '../../actions/Store/index';
import DeleteModal from '../../components/Store/DeleteModal';

const mapStateToProps = (state) => {
    return {
        id : state.category.openDeleteCategoryModal ? state.category.categoryID : state.product.productID,
        mode : state.category.openDeleteCategoryModal,
        headerTitle : state.category.openDeleteCategoryModal ? "Хотите удалить категорию" : "Точно удалить товар",
        bodyText : state.category.openDeleteCategoryModal ? "Все товары этой категории будут помечены 'Без категории'" : ""
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeDeleteModal: () => {
            dispatch(closeDeleteModal())
        },
        removeCategory : id => {
            dispatch(removeCategory(id))
        },
        removeProduct : id => {
            dispatch(removeProduct(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);