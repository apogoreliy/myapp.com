import React, {Component} from 'react';
import Product from './Product'
import ProductModal from '../containers/ProductModal';

class ProductList extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchProducts();
    }

    renderProducts() {
        let arr = [];
        for (let j in this.props.products) {
            if (this.props.products.hasOwnProperty(j)) {
                let p = this.props.products[j];
                arr.push(
                    <Product id={p.productID} name={p.name} price={p.price}
                             purchasePrice={p.purchasePrice} key={'product' + p.productID} edit={this.props.edit}
                             remove={this.props.remove}/>
                )
            }
        }
        return arr;
    }

    render() {
        return (
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
                    {this.props.products && this.renderProducts()}
                    </tbody>
                </table>
                <ProductModal />
            </div>)
    }
}

export default ProductList;