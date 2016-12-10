import React from 'react';
import { connect } from 'react-redux'
import { openDeleteCategoryModal, selectCategory } from '../actions'
import Category from '../components/Category';

const mapStateToProps = (state) => {
    return {
        categories: state.category.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(openDeleteCategoryModal(id))
        },
        selectCategory : (id) => {
            dispatch(selectCategory(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);