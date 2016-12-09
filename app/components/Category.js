import React from 'react';

export default ({close, selectCategory}) => (
    <div style={{marginTop: "10px"}}>
        <span className="btn btn-default" onClick={close} style={{marginRight: "10px"}}>X</span>
        <a onClick={e => { e.preventDefault(); selectCategory(1); }}>
            Телефоны
        </a>
    </div>
);