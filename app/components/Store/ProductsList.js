import React, {Component, PropTypes} from 'react';
import Product from './Product';
import ProductModal from '../../containers/Store/ProductModal';
import DeleteModal from '../../containers/Store/DeleteModal';
import RemindModal from './RemindModal';

class ProductList extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchProducts();
    }

    renderProducts(products, remove, edit) {
        let arr = [];
        for (let j in products) {
            if (products.hasOwnProperty(j)) {
                let p = products[j];
                arr.push(
                    <Product id={p.productID}
                             name={p.name} price={p.price}
                             purchasePrice={p.purchasePrice}
                             key={'product' + p.productID}
                             edit={edit}
                             remove={remove}/>
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
                        {this.props.products && this.renderProducts(this.props.products, this.props.remove, this.props.edit)}
                    </tbody>
                </table>

                {this.props.openProductModal && <ProductModal /> }
                { this.props.openRemindModal && <RemindModal handleClickBtn={this.props.closeRemindModal} text={this.props.remindModalText} /> }
                {this.props.openDeleteProductModal && <DeleteModal/>}
            </div>)
    }
}

ProductList.propTypes = {
    products: PropTypes.array,
    openDeleteProductModal : PropTypes.bool,
    openProductModal : PropTypes.bool,
    closeRemindModal : PropTypes.func,
    openRemindModal : PropTypes.bool,
    remindModalText : PropTypes.string
};

export default ProductList;