import React, {Component} from 'react';
import { connect } from 'react-redux'
import { closeProductModal, addProduct, editProduct } from '../actions'

class ProductModal extends Component{
    constructor(props){
        super(props);

        console.log('props', props);

        this.state = {
            categoryID : this.props.product ? this.props.product.categoryID :
                ( this.props.selectedCategory ? this.props.selectedCategory : 0 ),
            name : this.props.product ? this.props.product.name : "",
            purchasePrice : this.props.product ? this.props.product.name : "",
            price : this.props.product ? this.props.product.price : ""
        };

        this.cancelClick = this.cancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePurchasePrice = this.handleChangePurchasePrice.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    renderCategories (categories) {
        let arr = [];
        for (let j in categories){
            if( categories.hasOwnProperty( j ) ) {
                let c = categories[j];
                arr.push (
                    <option key={'productModal'+c.categoryID} value={c.categoryID}>{c.name}</option>
                )
            }
        }
        return arr;
    }

    cancelClick () {
        this.props.dispatch(closeProductModal())
    }

    handleClickBtn(){
        if (
            !this.state.name.trim() || !this.state.purchasePrice || parseInt(this.state.purchasePrice) === 0 || !this.state.price || parseInt(this.state.price) === 0
        ) return;

        this.props.mode ?
            this.props.dispatch(addProduct(this.state.categoryID, this.state.name, this.state.purchasePrice, this.state.price)) :
            this.props.dispatch(editProduct(this.props.productID, this.state.categoryID, this.state.name, this.state.purchasePrice, this.state.price));
    }

    handleChangeCategory(e){
        this.setState({categoryID : e.target.value})
    }
    handleChangeName(e){
        console.log(e.target.value);

        this.setState({name : e.target.value})
    }
    handleChangePurchasePrice(e){
        this.setState({purchasePrice : e.target.value})
    }
    handleChangePrice(e){
        this.setState({price : e.target.value})
    }

    
    render() {
        return (
            <div>
                <div style={{display: this.props.confirm ? "block" : "none"}} className="modal in" role="dialog"
                     aria-labelledby="modal-label">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <button
                                type="button"
                                onClick={this.cancelClick}
                                className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">{this.props.headerTitle}</h4>
                            <div className="modal-body">
                                <select className="form-control"
                                        style={{marginTop: "15px"}}
                                    onChange={this.handleChangeCategory}
                                        name="categoryID"
                                        value={this.state.categoryID}>
                                    {this.props.categories && this.renderCategories(this.props.categories)}
                                </select>
                                <input type="text"
                                       className="form-control"
                                       onChange={this.handleChangeName}
                                       placeholder="Название"
                                       style={{marginTop: "15px"}}
                                       name="name"
                                       value={this.state.name}
                                />
                                <input type="text"
                                       className="form-control"
                                       onChange={this.handleChangePurchasePrice}
                                       placeholder="Закупочная стоимость"
                                       style={{marginTop: "15px"}}
                                       name="purchasePrice"
                                       value={this.state.purchasePrice}
                                />
                                <input type="text"
                                       className="form-control"
                                       onChange={this.handleChangePrice}
                                       placeholder="Розничная цена"
                                       style={{marginTop: "15px"}}
                                       name="price"
                                       value={this.state.price}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary"
                                    onClick={this.handleClickBtn}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{display: this.props.confirm ? "block" : "none"}} className="modal-backdrop in"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);

    return {
        productID : state.productID,
        mode : state.product.openAddProductModal,
        product: state.product.openEditProductModal ? state.product.prods[state.product.productID] : null,
        categories : state.category.cats,
        selectedCategory : state.category.selectedCategory,
        confirm : state.product.openAddProductModal || state.product.openEditProductModal,
        headerTitle : state.product.openAddProductModal ? "Добавить товар" : "Изменить товар"
    }
};

export default connect(
    mapStateToProps
)(ProductModal);