import { connect } from 'react-redux';
import CategoryModal from '../../components/Store/CategoryModal';
import { closeCategoryModal, addCategory } from '../../actions/Store/index'

const mapStateToProps = () => {
    return {
        headerTitle : "Добавить категорию"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(closeCategoryModal())
        },
        handleClick : (name) => {
            dispatch(addCategory(name))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryModal);