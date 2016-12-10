import React from 'react';
import Product from './Product'

export default ({products, edit, remove}) => {
    return(
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
            {!products ? "" :
                products.map((p, index) => {
                    return <Product
                                    id={p.productID}
                                    name={p.name}
                                    price={p.price}
                                    purchasePrice={p.purchasePrice}
                                    key={index}
                                    edit={edit}
                                    remove={remove} />
                })
            }
            </tbody>
        </table>
    </div>
)};