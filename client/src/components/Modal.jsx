import React from 'react';
import styles from '../css/modal.css';

const Modal = ({ photo, index }) => {
  const { id, user_name, photo_title, date, url, description } = photo;
  return (
    <div className={styles.image}>
      <img alt="" src={url} index={index} />
    </div>
  )
};

export default Modal;
