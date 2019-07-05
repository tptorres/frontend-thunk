import React from 'react';
import './Modal.css';

const Modal = props => (
  <div className='modal'>
    <header className='modal-header'>
      <h1>{props.title}</h1>
    </header>
    <section className='modal-content'>{props.children}</section>
    <section className='modal-actions'>
      {props.canReport && (
        <button className='modal-btn-r' onClick={props.onReport}>
          Report
        </button>
      )}
      {props.canCancel && (
        <button className='modal-btn-c' onClick={props.onCancel}>
          Cancel
        </button>
      )}
    </section>
  </div>
);

export default Modal;
