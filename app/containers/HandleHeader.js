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

export default connect(
    null,
    mapDispatchToProps
)(Header);