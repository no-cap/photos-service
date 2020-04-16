import React from 'react';
import Modal from './Modal.jsx';
import Text from './Text.jsx';
import styles from '../css/modalCard.css';

const ModalCard = ({ photos, selectedPhotoIndex }) => {
  const renderPhotos = photos.slice(selectedPhotoIndex, selectedPhotoIndex + 1);
  return (
    <div className={styles.wrapper}>
      <div className="modal-slider">
        {
          renderPhotos.map((photo, index) => (
            <React.Fragment>
              <Modal index={index} photo={photo} />
              <Text index={index} photo={photo} />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
};

export default ModalCard;
