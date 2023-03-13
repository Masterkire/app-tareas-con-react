import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

/* const modal = ReactDOM.createPortal(); */

function Modal( {children} ){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };