import React from 'react';
import { connect } from 'react-redux'
import { closeDeleteCategoryModal } from '../actions'

const DeleteModal = (props) => (
    <div>
        <div style={{display: props.confirm ? "block" : "none"}} className="modal in" role="dialog"
             aria-labelledby="modal-label">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" onClick={props.handleConf} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title">{props.headerTitle}</h4>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={props.handleConf}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
        <div style={{display: props.confirm ? "block" : "none"}} className="modal-backdrop in"></div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        confirm : state.category.openDeleteCategoryModal,
        headerTitle : state.category.openDeleteCategoryModal ? "Хотите удалить категорию" : "Точно удалить товар"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleConf: () => {
            dispatch(closeDeleteCategoryModal())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteModal);