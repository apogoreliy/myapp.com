import { connect } from 'react-redux'
import { openProductModal, openCategoryModal, openRemindModalFunc } from '../actions'
import Header from '../components/Header'

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
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);