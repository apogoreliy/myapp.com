import React from 'react';

export default (props) => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.purchasePrice}</td>
        <td>{props.price}</td>
        <td>
            <button className="btn btn-default" style={{marginRight: "10px"}} onClick={() => {
                props.remove(props.id)
            }}>Удалить
            </button>
            <button className="btn btn-default" style={{marginRight: "10px"}} onClick={() => {
                props.edit(props.id)
            }}>Изменить
            </button>
        </td>
    </tr>
);
