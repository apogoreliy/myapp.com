import React, {Component, PropTypes} from 'react';
import Validator from 'validator';
import { connect } from 'react-redux'
import { auth, closeAuthModal } from '../../actions/auth'

class AuthModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login:'', password:'', confirmPassword : '',
            loginError : false, passwordError : false, confirmError : false
        };
        this.cancelClick = this.cancelClick.bind(this);
        this.validation = this.validation.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeConfirmPass = this.handleChangeConfirmPass.bind(this);
    }

    cancelClick() {
        this.props.dispatch(closeAuthModal())
    }

    validation() {
        if (!this.state.login) {
            this.setState({loginError: true});
            return false;
        }
        else if (!this.state.password) {
            this.setState({passwordError: true});
            return false;
        }
        else if (this.props.mode && !this.state.confirmPassword) {
            this.setState({confirmPassword: true});
            return false;
        }
        else if (this.state.confirmError || this.state.loginError) return false;
        return true;
    }

    handleClickBtn() {
        if(this.validation()) {
            this.props.dispatch( auth(this.props.mode ? 'signUp' : 'signIn', this.state.login.trim(), this.state.password));
        }
    }

    handleChangeLogin(e){
        this.setState({loginError : !Validator.isEmail(e.target.value.trim())});
        this.setState({login : e.target.value});
    }

    handleChangePass(e){
        this.setState({passwordError: false, password : e.target.value});
    }

    handleChangeConfirmPass(e){
        this.setState({confirmError : this.state.password !== e.target.value});
        this.setState({confirmPassword : e.target.value});
    }

    render() {
        return (
            <div>
                <div style={{display: "block"}} className="modal in" role="dialog" aria-labelledby="modal-label">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <input type="text"
                                       className="form-control"
                                       onChange={this.handleChangeLogin}
                                       placeholder="Email"
                                       name="login"
                                       value={this.state.login}
                                />
                                {this.state.loginError &&
                                    <div className="alert alert-warning" role="alert">
                                            <strong>Предупреждение!</strong> Логин должен быть корректным email.
                                    </div>
                                }
                                <input type="password"
                                       className="form-control"
                                       onChange={this.handleChangePass}
                                       placeholder="Пароль"
                                       name="password"
                                       value={this.state.password}
                                />
                                {this.state.passwordError &&
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Предупреждение!</strong> Пароль не может быть пустым.
                                    </div>
                                }
                                { this.props.mode && <input type="password"
                                       className="form-control"
                                       onChange={this.handleChangeConfirmPass}
                                       placeholder="Подтверждение пароля"
                                       name="confirmPassword"
                                       value={this.state.confirmPassword}/>
                                }
                                {this.state.confirmError &&
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Предупреждение!</strong> Подтверждение неверно.
                                    </div>
                                }
                                {this.props.error &&
                                <div className="alert alert-danger" role="alert">
                                    <strong>Warning!</strong> {this.props.error}
                                </div>
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleClickBtn}>
                                    Ok
                                </button>
                                <button type="button" className="btn btn-danger" onClick={this.cancelClick}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: "block"}} className="modal-backdrop in"></div>
            </div>
        )
    }
}

AuthModal.propTypes = {
    mode: PropTypes.bool,
    error : PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};

const mapStateToProps = (state) => {
    return {
        mode : state.auth.openSignUpModal,
        error : state.auth.error
    }
};

export default connect(
    mapStateToProps
)(AuthModal);