import React from 'react';

const Product = () => (
    <tr>
        <td>1</td>
        <td>HTC</td>
        <td>20000</td>
        <td>25000</td>
        <td>
            <button className="btn btn-default" style={{marginRight: "10px"}} >Изменить</button>
            <button className="btn btn-default" style={{marginRight: "10px"}} >Удалить</button>
        </td>
    </tr>
);

export default Product;