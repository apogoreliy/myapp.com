import { connect } from 'react-redux'
import { openProductModal, openCategoryModal } from '../actions'
import Header from '../components/Header'

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: () => {
            dispatch(openProductModal())
        },
        addCategory: ()=> {
            dispatch(openCategoryModal())
        }
    }
};

const OpenProductModal = connect(
    null,
    mapDispatchToProps
)(Header);

export default OpenProductModal