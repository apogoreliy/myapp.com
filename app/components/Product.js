import React from 'react';

const Product = ({edit, remove}) => (
    <tr>
        <td>1</td>
        <td>HTC</td>
        <td>20000</td>
        <td>25000</td>
        <td>
            <button className="btn btn-default" style={{marginRight: "10px"}} onClick={()=> {edit(1)}} >Изменить</button>
            <button className="btn btn-default" style={{marginRight: "10px"}} onClick={()=> {remove(1)}}>Удалить</button>
        </td>
    </tr>
);

export default Product;