import React from 'react';
import Product from './Product'

const renderProducts = (products, edit, remove) => {
    let arr = [];
    for (let j in products){
        if( products.hasOwnProperty( j ) ) {
            let p = products[j];
            arr.push (
                <Product id={p.productID} name={p.name} price={p.price}
                purchasePrice={p.purchasePrice} key={'product'+p.productID} edit={edit} remove={remove} />
            )
        }
    }
    return arr;
};

export default ({products, edit, remove}) => {
    return(
    <div className="col-md-9">
        <table className="table table-hover">
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
            {products && renderProducts(products, edit, remove)}
            </tbody>
        </table>
    </div>
)};