import React, {PropTypes} from 'react';

const Product = (props) => (
    <tr>
        <td className="id">{props.id}</td>
        <td className="name">{props.name}</td>
        <td>{props.purchasePrice}</td>
        <td>{props.price}</td>
        <td className="product-buttons">
            <button className="btn btn-default product-btn" onClick={() => { props.remove(props.id) }}>
                Удалить
            </button>
            <button className="btn btn-default edit-product" onClick={() => { props.edit(props.id) }}>
                Изменить
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