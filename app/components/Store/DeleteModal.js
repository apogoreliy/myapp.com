import React, {Component, PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';

class DeleteModal extends Component {
    constructor(props) {
        super(props);

        this.cancelClick = this.cancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
    }

    cancelClick() {
        this.props.closeDeleteModal();
    }

    handleClickBtn() {
        this.props.mode ? this.props.removeCategory(this.props.id) : this.props.removeProduct(this.props.id);
    }

    render() {
        return (
            <ModalWindow>
                <button type="button" onClick={this.cancelClick} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title text-holder">{this.props.mode ? this.props.headerTitle : this.props.headerTitle + ' ID-' + this.props.id + ' ?'}</h4>
                <div className="text-holder"> {this.props.bodyText}</div>
                <div className="modal-footer">
                    <Button classSet="btn-primary" handleClick={this.handleClickBtn} text="Да"/>
                    <Button classSet="btn-danger" handleClick={this.cancelClick} text="Нет"/>
                </div>
            </ModalWindow>
        )
    }
}

DeleteModal.propTypes = {
    id: PropTypes.number,
    mode: PropTypes.bool,
    headerTitle : PropTypes.string,
    bodyText : PropTypes.string,
    closeDeleteModal : PropTypes.func,
    removeCategory : PropTypes.func,
    removeProduct : PropTypes.func
};

export default DeleteModal;