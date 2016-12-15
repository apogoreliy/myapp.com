import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { closeDeleteModal, removeCategory, removeProduct } from '../actions'

class DeleteModal extends Component {
    constructor(props) {
        super(props);

        this.cancelClick = this.cancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
    }

    cancelClick() {
        this.props.dispatch(closeDeleteModal())
    }

    handleClickBtn() {
        this.props.mode ? this.props.dispatch(removeCategory(this.props.id)) : this.props.dispatch(removeProduct(this.props.id))
    }

    render() {
        return (
            <div>
                <div style={{display: this.props.confirm ? "block" : "none"}} className="modal in" role="dialog"
                     aria-labelledby="modal-label">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" onClick={this.cancelClick} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title text-holder">{this.props.mode ? this.props.headerTitle : this.props.headerTitle + ' ID-' + this.props.id + ' ?'}</h4>
                            <div className="text-holder"> {this.props.bodyText}</div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleClickBtn}>
                                    Да
                                </button>
                                <button type="button" className="btn btn-primary" onClick={this.cancelClick}>
                                    Нет
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: this.props.confirm ? "block" : "none"}} className="modal-backdrop in"></div>
            </div>
        )
    }
}

DeleteModal.propTypes = {
    id: PropTypes.number,
    mode: PropTypes.bool,
    confirm: PropTypes.bool,
    headerTitle : PropTypes.string,
    bodyText : PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        id : state.category.openDeleteCategoryModal ? state.category.categoryID : state.product.productID,
        mode : state.category.openDeleteCategoryModal,
        confirm : state.category.openDeleteCategoryModal || state.product.openDeleteProductModal,
        headerTitle : state.category.openDeleteCategoryModal ? "Хотите удалить категорию" : "Точно удалить товар",
        bodyText : state.category.openDeleteCategoryModal ? "Все товары этой категории будут помечены 'Без категории'" : ""
    }
};

export default connect(
    mapStateToProps
)(DeleteModal);