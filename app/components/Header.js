import React from 'react';

export default ({addProduct, addCategory}) => (
    <div style={{marginTop : "40px", marginBottom: "40px"}}>
        <span style={{border: "1px solid black", float: "left", padding: "10px", borderRadius: "5px", marginRight: "180px"}}>MY APP</span>
        <button type="button" className="btn btn-default" onClick={() => {addProduct()}}>Добавить товар</button>
        <button type="button" className="btn btn-default" onClick={() => {addCategory()}}>Добавить категорию</button>
    </div>
);