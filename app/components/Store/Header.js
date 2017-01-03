import React, {PropTypes} from 'react';
import Button from '../common/Button';
import SearchFilter from '../common/SearchFilter';

const Handler = ({openRemindModal, openRemindModalFunc, addProduct, addCategory, searchProducts}) => (
    <div style={{marginBottom : "20px"}}>
        <Button classSet="btn-default product-btn" handleClick={() => {
            openRemindModal || openRemindModal === undefined ? openRemindModalFunc() : addProduct()}} text="Добавить товар"/>
        <Button classSet="btn-default product-btn" handleClick={addCategory} text="Добавить категорию"/>
        <SearchFilter onChange={searchProducts} />
    </div>
);

Handler.propTypes = {
    addProduct : PropTypes.func.isRequired,
    addCategory : PropTypes.func.isRequired,
    searchProducts : PropTypes.func.isRequired,
    openRemindModal: PropTypes.bool,
    openRemindModalFunc : PropTypes.func.isRequired
};

export default Handler;