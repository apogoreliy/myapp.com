import React from 'react';
import { connect } from 'react-redux'
import { closeDeleteModal } from '../actions'

const DeleteModal = ({confirm, close, headerTitle, bodyText}) => (
    <div>
        <div style={{display: confirm ? "block" : "none"}} className="modal in" role="dialog"
             aria-labelledby="modal-label">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" onClick={close} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title" style={{textAlign: "center"}}>{headerTitle}</h4>
                    <div style={{textAlign: "center"}}>
                        {bodyText}
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={close}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
        <div style={{display: confirm ? "block" : "none"}} className="modal-backdrop in"></div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        confirm : state.category.openDeleteCategoryModal || state.product.openDeleteProductModal,
        headerTitle : state.category.openDeleteCategoryModal ? "Хотите удалить категорию" : "Точно удалить товар",
        bodyText : state.category.openDeleteCategoryModal ? "Все товары этой категории будут помечены 'Без категории'" : ""
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(closeDeleteModal())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteModal);