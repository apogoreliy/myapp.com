import React, {Component, PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';

class CategoryModal extends Component{
    constructor(props){
        super(props);

        this.state = { name : ""};
        this.cancelClick = this.cancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    cancelClick(){
        this.setState({name : ""});
        this.props.close()
    }

    handleClickBtn(){
        if (!this.state.name.trim()) return;
        this.props.handleClick(this.state.name);
        this.setState({name : ""});
    }

    handleChangeName(e){
        this.setState({name : e.target.value});
    }

    render(){
        return (
            <ModalWindow>
                <button type="button" onClick={this.cancelClick} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">{this.props.headerTitle}</h4>
                <div className="modal-body">
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Название"/>
                </div>
                <div className="modal-footer">
                    <Button classSet="btn-primary" handleClick={this.handleClickBtn} text="Сохранить"/>
                    <Button classSet="btn-danger" handleClick={this.cancelClick} text="Отменить"/>
                </div>
            </ModalWindow>
        );
    }
}

CategoryModal.propTypes = {
    headerTitle: PropTypes.string,
    close : PropTypes.func,
    handleClick : PropTypes.func
};

export default CategoryModal;