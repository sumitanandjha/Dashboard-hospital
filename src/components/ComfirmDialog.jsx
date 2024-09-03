import React from 'react';

const ConfirmDialog = ({ isOpen, onConfirm, onCancel, message }) => {
    if (!isOpen) return null;

    return (
        <div className="confirm-dialog-overlay">
            <div className="confirm-dialog">
                <h3>{message}</h3>
                <div className="confirm-dialog-buttons">
                    <button onClick={onConfirm} className="btn btn-primary">Yes</button>
                    <button onClick={onCancel} className="btn btn-secondary">No</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;