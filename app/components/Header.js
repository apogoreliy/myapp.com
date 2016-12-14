import React, {PropTypes} from 'react';

const Header = ({addProduct, addCategory}) => (
    <div className="header">
        <span>MY APP</span>
        <button type="button" className="btn btn-default product-btn" onClick={() => {addProduct()}}>Добавить товар</button>
        <button type="button" className="btn btn-default category-btn" onClick={() => {addCategory()}}>Добавить категорию</button>
    </div>
);

Header.propTypes = {
    addProduct : PropTypes.func.isRequired,
    addCategory : PropTypes.func.isRequired
};

export default Header;