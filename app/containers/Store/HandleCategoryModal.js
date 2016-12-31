import { connect } from 'react-redux';
import CategoryModal from '../../components/Store/CategoryModal';
import { closeCategoryModal, addCategory, setCategoryExistFlag } from '../../actions/Store/index'

const mapStateToProps = (state) => {
    return {
        headerTitle : "Добавить категорию",
        categoryExist : state.category.categoryExist
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(closeCategoryModal())
        },
        handleClick : (name) => {
            dispatch(addCategory(name))
        },
        setCategoryExistFlag : ()=>{
            dispatch(setCategoryExistFlag())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryModal);