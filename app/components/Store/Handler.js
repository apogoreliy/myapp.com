import React, {PropTypes} from 'react';

const Handler = ({openRemindModal, openRemindModalFunc, addProduct, addCategory, loaded}) => (
    <div style={{marginBottom : "20px"}}>
        <button type="button" className="btn btn-default product-btn" onClick={() => {
            openRemindModal || openRemindModal === undefined ? openRemindModalFunc() : addProduct()}
        }>Добавить товар</button>
        <button type="button" className="btn btn-default category-btn" onClick={addCategory}>Добавить категорию</button>
    </div>
);

Handler.propTypes = {
    addProduct : PropTypes.func.isRequired,
    addCategory : PropTypes.func.isRequired
};

export default Handler;