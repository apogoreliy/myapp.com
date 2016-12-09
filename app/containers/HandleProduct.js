import React from 'react';
import { connect } from 'react-redux'
import { openEditProductModal, openDeleteProductModal } from '../actions'
import Product from '../components/Product';

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (id) => {
            console.log(id);

            dispatch(openEditProductModal(id))
        },
        remove : (id) => {
            dispatch(openDeleteProductModal(id))
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Product);