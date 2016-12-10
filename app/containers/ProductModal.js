import React from 'react';
import { connect } from 'react-redux'
import { closeProductModal, addProduct, editProduct } from '../actions'

const ProductModal = ({dispatch, confirm, headerTitle, categories, product, mode}) => {
    let name = "", price = "", purchasePrice = "", category = 0;
    if(product) { ({name, price, purchasePrice, category} = product)}

    return(
        <div>
            <div style={{display: confirm ? "block" : "none"}} className="modal in" role="dialog"
                 aria-labelledby="modal-label">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button
                            type="button"
                            onClick={() => {
                                category.value= 0;
                                name.value='';
                                purchasePrice.value = '';
                                price.value='';
                                dispatch(closeProductModal())
                            }}
                            className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title">{headerTitle}</h4>
                        <div className="modal-body">
                            <select className="form-control"
                                    style={{marginTop: "15px"}}
                                    ref={node => category = node}
                                    defaultValue={category}>
                                {!categories ? "" : categories.map((c, index)=>{
                                   return <option key={index} value={index}>{c}</option>
                                })}
                            </select>
                            <input type="text"
                                   className="form-control"
                                   ref={node => { name = node }}
                                   placeholder="Название"
                                   style={{marginTop: "15px"}}
                                   defaultValue={name}
                            />
                            <input type="text"
                                   className="form-control"
                                   ref={node => purchasePrice = node}
                                   placeholder="Закупочная стоимость"
                                   style={{marginTop: "15px"}}
                                   defaultValue={purchasePrice}
                            />
                            <input type="text"
                                   className="form-control"
                                   ref={node => price = node}
                                   placeholder="Розничная цена"
                                   style={{marginTop: "15px"}}
                                   defaultValue={price}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary"
                                onClick={
                                    () => {
                                        if (
                                            !name.value.trim() ||
                                            !purchasePrice.value || parseInt(purchasePrice.value) === 0 ||
                                            !price.value || parseInt(price.value) === 0
                                        ) return;

                                        mode ?
                                            dispatch(addProduct(category.value, name.value, purchasePrice.value, price.value)) :
                                            dispatch(editProduct(category.value, name.value, purchasePrice.value, price.value));
                                        category.value= 0;
                                        name.value='';
                                        purchasePrice.value = '';
                                        price.value='';
                                }}>
                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
            <div style={{display: confirm ? "block" : "none"}} className="modal-backdrop in"></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        mode : state.product.openAddProductModal,
        product: state.product.openEditProductModal ? state.product.products[state.product.productID] : null,
        categories : state.category.categories,
        confirm : state.product.openAddProductModal || state.product.openEditProductModal,
        headerTitle : state.product.openAddProductModal ? "Добавить товар" : "Изменить товар"
    }
};

export default connect(
    mapStateToProps
)(ProductModal);