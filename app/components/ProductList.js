import React, {Component} from 'react';
import Product from './Product'

const ProductList = () => (
    <div className="col-md-9">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Название товара</th>
                    <th>Цена / зак.</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                <Product />
            </tbody>
        </table>
    </div>
);

export default ProductList;