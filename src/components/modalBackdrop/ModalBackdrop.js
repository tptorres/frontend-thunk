import React from 'react';
/* import './ModalBackdrop.css'; */

const ModalBackdrop = props => (
  <div className='modal-backdrop' onClick={props.onCancel} />
);
export default ModalBackdrop;
