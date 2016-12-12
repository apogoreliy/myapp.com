import React from 'react';
import { connect } from 'react-redux'
import { openEditProductModal, openDeleteProductModal } from '../actions'
import ProductList from '../components/ProductList';

const mapStateToProps = (state) => {
    return {
        products: state.product.prods ? state.product.prods.filter(p => {
            return parseInt(p.categoryID) === (state.category.selectedCategory ? state.category.selectedCategory : 0)
        }) : null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (id) => {
            dispatch(openEditProductModal(id))
        },
        remove : (id) => {
            dispatch(openDeleteProductModal(id))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);