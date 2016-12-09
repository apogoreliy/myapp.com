import React from 'react';
import { connect } from 'react-redux'
import { closeCategoryModal } from '../actions'

const CategoryModal =(props) => (
    <div>
        <div style={{display: props.confirm ? "block" : "none"}} className="modal in" role="dialog"
             aria-labelledby="modal-label">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" onClick={props.handleConf} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <h4 className="modal-title">{props.headerTitle}</h4>
                    <div className="modal-body">
                        <input type="text" className="form-control" placeholder="Название" style={{marginTop: "15px"}}/>
                    </div>
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
        confirm : state.category.openAddCategoryModal,
        headerTitle : "Добавить категорию"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleConf: () => {
            dispatch(closeCategoryModal())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryModal);