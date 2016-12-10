import React from 'react';
import { connect } from 'react-redux'
import { closeDeleteModal, removeCategory, removeProduct } from '../actions'

const DeleteModal = ({dispatch ,confirm, close, headerTitle, bodyText, mode, id}) => (
    <div>
        <div style={{display: confirm ? "block" : "none"}} className="modal in" role="dialog"
             aria-labelledby="modal-label">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" onClick={()=>dispatch(closeDeleteModal())}
                            className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title" style={{textAlign: "center"}}>{mode ? headerTitle : headerTitle+' ID-'+id}</h4>
                    <div style={{textAlign: "center"}}> {bodyText}</div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"
                            onClick={() => dispatch(mode ? removeCategory() : removeProduct())}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
        <div style={{display: confirm ? "block" : "none"}} className="modal-backdrop in"></div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        id : state.product.productID,
        mode : state.category.openDeleteCategoryModal,
        confirm : state.category.openDeleteCategoryModal || state.product.openDeleteProductModal,
        headerTitle : state.category.openDeleteCategoryModal ? "Хотите удалить категорию" : "Точно удалить товар",
        bodyText : state.category.openDeleteCategoryModal ? "Все товары этой категории будут помечены 'Без категории'" : ""
    }
};

export default connect(
    mapStateToProps
)(DeleteModal);