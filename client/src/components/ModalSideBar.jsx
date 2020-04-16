import React from 'react';
import SideBar from './SideBar.jsx';
import styles from '../css/ModalSideBar.css';

const ModalSideBar = ({ photos }) => {
  return (
    <div className={styles.sidebar}>
      {photos.map((photo) => (
        <SideBar key={photo.id} photo={photo} />
      ))
      }
    </div>
  )
}

export default ModalSideBar;
