import { connect } from 'react-redux'
import { openProductModal, openCategoryModal, openRemindModalFunc } from '../../actions/Store/index'
import Handler from '../../components/Store/Handler'

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
)(Handler);