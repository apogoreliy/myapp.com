import React from 'react';

export default ({addProduct, addCategory}) => (
    <div className="header">
        <span>MY APP</span>
        <button type="button" className="btn btn-default product-btn" onClick={() => {addProduct()}}>Добавить товар</button>
        <button type="button" className="btn btn-default category-btn" onClick={() => {addCategory()}}>Добавить категорию</button>
    </div>
);