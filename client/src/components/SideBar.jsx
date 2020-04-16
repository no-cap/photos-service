import React from 'react';
import styles from '../css/SideBar.css';

const SideBar = ({ photo }) => {
    const { id, user_name, photo_title, date, url, description } = photo;
    return (
        <div className={styles.image}>
            <img src={url} alt="" />
        </div>
    )
}

export default SideBar;
