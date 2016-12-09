import React from 'react';
import { connect } from 'react-redux'
import { openDeleteCategoryModal, selectCategory } from '../actions'
import Category from '../components/Category';

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(openDeleteCategoryModal())
        },
        selectCategory : (id) => {
            dispatch(selectCategory(id))
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Category);