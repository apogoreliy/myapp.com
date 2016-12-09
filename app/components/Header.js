import React from 'react';

export default ({addProduct, addCategory}) => (
    <div className="btn-group" role="group" style={{marginTop : "40px", marginBottom: "40px"}}>
        <button type="button" className="btn btn-default" onClick={() => {addProduct()}}>Добавить товар</button>
        <button type="button" className="btn btn-default" onClick={() => {addCategory()}}>Добавить категорию</button>
    </div>
);