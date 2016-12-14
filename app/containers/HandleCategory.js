import React from 'react';
import { connect } from 'react-redux'
import { openDeleteCategoryModal, selectCategory, fetchCategories } from '../actions'
import CategoriesList from '../components/CategoriesList';

const mapStateToProps = (state) => {
    return {
        categories: state.category,
        openDeleteCategoryModal : state.category.openDeleteCategoryModal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(openDeleteCategoryModal(id))
        },
        selectCategory : (id) => {
            dispatch(selectCategory(id))
        },
        fetchCategories : ()=> {
            dispatch(fetchCategories())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesList);