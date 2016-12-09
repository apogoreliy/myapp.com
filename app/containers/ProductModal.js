import React from 'react';
import { connect } from 'react-redux'
import { closeProductModal, addProduct } from '../actions'

const ProductModal = ({confirm, close, headerTitle, handleClick}) => {
    let product = {
        name : "",
        price : "",
        purchasePrice : "",
        category : 0
    };

    return(
        <div>
            <div style={{display: confirm ? "block" : "none"}} className="modal in" role="dialog"
                 aria-labelledby="modal-label">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button
                            type="button"
                            onClick={() => {
                                product.category.value= 0;
                                product.name.value='';
                                product.purchasePrice.value = '';
                                product.price.value='';
                                close();
                            }}
                            className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <h4 className="modal-title">{headerTitle}</h4>
                        <div className="modal-body">
                            <select className="form-control" style={{marginTop: "15px"}} ref={node => product.category = node}>
                                <option value="0">Телефоны</option>
                            </select>
                            <input type="text"
                                   className="form-control"
                                   ref={node => {
                                       product.name = node }}
                                   placeholder="Название"
                                   style={{marginTop: "15px"}}/>
                            <input type="text"
                                   className="form-control"
                                   ref={node => product.purchasePrice = node}
                                   placeholder="Закупочная стоимость"
                                   style={{marginTop: "15px"}}/>
                            <input type="text"
                                   className="form-control"
                                   ref={node => product.price = node}
                                   placeholder="Цена"
                                   style={{marginTop: "15px"}}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={
                            () => {
                                handleClick(product);
                                product.category.value= 0;
                                product.name.value='';
                                product.purchasePrice.value = '';
                                product.price.value='';
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
    //console.log('s', state);

    return {
        confirm : state.product.openAddProductModal || state.product.openEditProductModal,
        headerTitle : state.product.openAddProductModal ? "Добавить товар" : "Изменить товар"
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(closeProductModal())
        },
        handleClick: ({category, name, purchasePrice, price}) => {
            if (
                !name.value.trim() ||
                !purchasePrice.value || parseInt(purchasePrice.value) === 0 ||
                !price.value || parseInt(price.value) === 0
            ) return;

            dispatch(addProduct(category.value, name.value, purchasePrice.value, price.value))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductModal);