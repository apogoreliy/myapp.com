import React from 'react';

const Category = () => (
    <div style={{marginTop: "10px"}}>
        <span className="btn btn-default" style={{marginRight: "10px"}}>X</span>
        <a onClick={e => { e.preventDefault(); /*onClick()*/ }}>
            Телефоны
        </a>
    </div>
);

export default Category;