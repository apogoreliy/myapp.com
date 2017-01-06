import React from 'react';
import services from '../../utils/services';

export default ({onChange}) =>(
    <input type="text" className="form-control" placeholder="Введите название товара"
                  onChange={(e)=>{ onChange(services.he(e.target.value.trim())); }}/>
);