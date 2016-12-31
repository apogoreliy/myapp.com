import React, {PropTypes} from 'react';
import Button from '../common/Button'

const Handler = ({openRemindModal, openRemindModalFunc, addProduct, addCategory, loaded, testDB}) => (
    <div style={{marginBottom : "20px"}}>
        <Button classSet="btn-default product-btn" handleClick={() => {
            openRemindModal || openRemindModal === undefined ? openRemindModalFunc() : addProduct()}} text="Добавить товар"/>
        <Button classSet="btn-default product-btn" handleClick={addCategory} text="Добавить категорию"/>
    </div>
);

Handler.propTypes = {
    addProduct : PropTypes.func.isRequired,
    addCategory : PropTypes.func.isRequired
};

export default Handler;