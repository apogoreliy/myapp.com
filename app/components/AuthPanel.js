import React from 'react';

const AuthPanel = ({loggedIn, openAuthModalToSignIn, openAuthModalToSignUp, signOut}) => (
    <div className="auth-panel">
        { loggedIn ? <button type="button" className="btn btn-primary category-btn" onClick={signOut}>Выйти</button> :
            <div>
                <button type="button" className="btn btn-primary product-btn" onClick={openAuthModalToSignIn}>Войти</button>
                <button type = "button" className="btn btn-primary category-btn" onClick={openAuthModalToSignUp}>Зарегистрироваться</button>
            </div>
        }
    </div>
);

export default AuthPanel;