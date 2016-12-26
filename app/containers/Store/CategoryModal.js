import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { closeCategoryModal, addCategory } from '../../actions/Store/index'

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
            <div>
                <div style={{display: "block"}} className="modal in" role="dialog"
                     aria-labelledby="modal-label">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button type="button" onClick={this.cancelClick} className="close" data-dismiss="modal"
                                    aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">{this.props.headerTitle}</h4>
                            <div className="modal-body">
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Название"/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" autoFocus={this.props.confirm}
                                        onClick={this.handleClickBtn}>
                                    Сохранить
                                </button>
                                <button type="button" className="btn btn-danger" autoFocus={this.props.confirm}
                                        onClick={this.cancelClick}>
                                    Отменить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "block"}} className="modal-backdrop in"></div>
            </div>
        );
    }
}

CategoryModal.propTypes = {
    headerTitle: PropTypes.string,
    close : PropTypes.func,
    handleClick : PropTypes.func
};

const mapStateToProps = () => {
    return {
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