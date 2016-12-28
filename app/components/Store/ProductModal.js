import React, {Component, PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';

class ProductModal extends Component{
    constructor(props){
        super(props);

        this.state = { categoryID : 0, name : "", purchasePrice : "", price : "" };
        this.cancelClick = this.cancelClick.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePurchasePrice = this.handleChangePurchasePrice.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    componentDidMount(){
        this.setState({
            categoryID : this.props.product && Object.keys(this.props.product).length !== 0 ? this.props.product[0].categoryID :
                ( this.props.selectedCategory ? this.props.selectedCategory :
                        ( this.props.categories && Object.keys(this.props.categories).length !== 0 ? this.props.categories[0].categoryID : 0 )
                ),
            name : this.props.product ? this.props.product[0].name : "",
            purchasePrice : this.props.product ? this.props.product[0].purchasePrice : "",
            price : this.props.product ? this.props.product[0].price : ""
        });
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

    resetState(){
        this.setState({name:"", purchasePrice: "", price : "", categoryID : 0 })
    }

    cancelClick () {
        this.resetState();
        this.props.closeProductModal();
    }

    handleClickBtn(){
        if (!this.state.name.trim() || 0 > this.state.categoryID || !this.state.purchasePrice || !this.state.price) return;

        this.props.mode ?
            this.props.addProduct(this.state.categoryID, this.state.name, this.state.purchasePrice, this.state.price) :
            this.props.editProduct(this.props.productID, this.state.categoryID, this.state.name, this.state.purchasePrice, this.state.price);
        this.resetState();
    }

    handleChangeCategory(e){
        this.setState({categoryID : e.target.value})
    }
    handleChangeName(e){
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
            <ModalWindow>
                <button
                    type="button"
                    onClick={this.cancelClick}
                    className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">{this.props.headerTitle}</h4>
                <div className="modal-body">
                    <select
                        className="form-control"
                        onChange={this.handleChangeCategory}
                        name="categoryID"
                        value={this.state.categoryID}>
                        {this.props.categories && this.renderCategories(this.props.categories)}
                    </select>
                    <input type="text"
                           className="form-control"
                           onChange={this.handleChangeName}
                           placeholder="Название"
                           name="name"
                           value={this.state.name}
                    />
                    <input type="text"
                           className="form-control"
                           onChange={this.handleChangePurchasePrice}
                           placeholder="Закупочная стоимость"
                           name="purchasePrice"
                           value={this.state.purchasePrice}
                    />
                    <input type="text"
                           className="form-control"
                           onChange={this.handleChangePrice}
                           placeholder="Розничная цена"
                           name="price"
                           value={this.state.price}
                    />
                </div>
                <div className="modal-footer">
                    <Button classSet="btn-primary" handleClick={this.handleClickBtn} text="Сохранить"/>
                    <Button classSet="btn-danger" handleClick={this.cancelClick} text="Отменить"/>
                </div>
            </ModalWindow>
        )
    }
}

ProductModal.propTypes = {
    productID : PropTypes.number,
    mode : PropTypes.bool,
    product : PropTypes.array,
    categories : PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.bool
    ]),
    selectedCategory : PropTypes.number,
    headerTitle : PropTypes.string,
    closeProductModal: PropTypes.func,
    addProduct : PropTypes.func,
    editProduct: PropTypes.func
};

export default ProductModal;