import React from 'react';

export default ({onChange}) =>(
    <input type="text" className="form-control" placeholder="Введите название товара"
                  onChange={(e)=>{ onChange(e.target.value); }}/>
);
