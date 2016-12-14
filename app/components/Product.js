import React, {PropTypes} from 'react';

const Product = (props) => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.purchasePrice}</td>
        <td>{props.price}</td>
        <td>
            <button className="btn btn-default product-btn" onClick={() => {
                props.remove(props.id)
            }}>Удалить
            </button>
            <button className="btn btn-default" onClick={() => {
                props.edit(props.id)
            }}>Изменить
            </button>
        </td>
    </tr>
);

Product.propTypes = {
    props: PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        purchasePrice : PropTypes.string,
        price : PropTypes.string,
        remove : PropTypes.func,
        edit : PropTypes.func
    })
};

export default Product;