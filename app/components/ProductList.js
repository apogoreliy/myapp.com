import React, {Component} from 'react';
import HandleProduct from '../containers/HandleProduct'

const ProductList = () => (
    <div className="col-md-9">
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Название товара</th>
                    <th>Цена / зак.</th>
                    <th>Цена</th>
                    <th>&#032;</th>
                </tr>
            </thead>
            <tbody>
                <HandleProduct />
            </tbody>
        </table>
    </div>
);

export default ProductList;