import React, {PropTypes} from 'react';

const RemindModal = ({handleClickBtn, text}) => (
    <div>
        <div style={{display: "block" }} className="modal in" role="dialog" aria-labelledby="modal-label">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h4 className="modal-title text-holder">{text}</h4>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleClickBtn}>
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{display: "block"}} className="modal-backdrop in"></div>
    </div>
);

RemindModal.propTypes = {
    handleClickBtn : PropTypes.func,
    text : PropTypes.string
};

export default RemindModal;