import React from 'react';
import { connect } from 'react-redux'
import { closeCategoryModal, addCategory } from '../actions'

const CategoryModal =({confirm, close, headerTitle, handleClick}) => {
    let name;
    return(
        <div>
            <div style={{display: confirm ? "block" : "none"}} className="modal in" role="dialog"
                 aria-labelledby="modal-label">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button type="button" onClick={close} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title">{headerTitle}</h4>
                        <div className="modal-body">
                            <input type="text" ref={node=>{name=node}} className="form-control" placeholder="Название" style={{marginTop: "15px"}}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={
                            () => {
                                handleClick(name.value);
                                name.value='';
                            }}>
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display: confirm ? "block" : "none"}} className="modal-backdrop in"></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        confirm : state.category.openAddCategoryModal,
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