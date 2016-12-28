import React, {PropTypes} from 'react';
import Button from '../common/Button';

const Product = (props) => (
    <tr>
        <td className="id">{props.id}</td>
        <td className="name">{props.name}</td>
        <td>{props.purchasePrice}</td>
        <td>{props.price}</td>
        <td className="product-buttons">
            <Button classSet="btn-default product-btn" handleClick={() => { props.remove(props.id) }} text="Удалить"/>
            <Button classSet="btn-default edit-btn" handleClick={() => { props.edit(props.id) }} text="Изменить"/>
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