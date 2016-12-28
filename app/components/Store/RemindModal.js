import React, {PropTypes} from 'react';
import Button from '../common/Button';
import ModalWindow from '../common/ModalWindow';

const RemindModal = ({handleClickBtn, text}) => (
    <ModalWindow>
        <h4 className="modal-title text-holder">{text}</h4>
        <div className="modal-footer">
            <Button classSet="btn-primary" handleClick={handleClickBtn} text="Ok"/>
        </div>
    </ModalWindow>
);

RemindModal.propTypes = {
    handleClickBtn : PropTypes.func,
    text : PropTypes.string
};

export default RemindModal;