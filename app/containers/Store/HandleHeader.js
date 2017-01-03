import { connect } from 'react-redux';
import { openProductModal, openCategoryModal, openRemindModalFunc, searchProducts } from '../../actions/Store/index';
import Header from '../../components/Store/Header';

const mapStateToProps = (state) => {
    return{
        openRemindModal : (state.category.cats && Object.keys(state.category.cats).length === 0)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: () => {
            dispatch(openProductModal())
        },
        addCategory: ()=> {
            dispatch(openCategoryModal())
        },
        openRemindModalFunc: ()=> {
            dispatch(openRemindModalFunc())
        },
        searchProducts : (value) => {
            dispatch(searchProducts(value))
        }
    }
};

export default connect( mapStateToProps, mapDispatchToProps )(Header);