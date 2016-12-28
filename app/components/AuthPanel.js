import React from 'react';
import Button from './common/Button';

const AuthPanel = ({loggedIn, openAuthModalToSignIn, openAuthModalToSignUp, signOut}) => (
    <div className="auth-panel">
        { loggedIn ?
            <Button classSet="btn-primary category-btn" handleClick={signOut} text="Выйти"/>
            :
            <div>
                <Button classSet="btn-primary product-btn" handleClick={openAuthModalToSignIn} text="Войти"/>
                <Button classSet="btn-primary category-btn" handleClick={openAuthModalToSignUp} text="Зарегистрироваться"/>
            </div>
        }
    </div>
);

export default AuthPanel;