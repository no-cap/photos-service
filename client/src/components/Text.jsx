import React from 'react';
import Star from './userAvatars/Star.jsx';
import Person from './userAvatars/Person.jsx';
import PersonRed from './userAvatars/PersonRed.jsx';
import BarMan from './userAvatars/BarMan.jsx';
import styles from '../css/text.css';

const Text = ({ photo }) => {

  const { id, user_name, photo_title, date, description } = photo;
  return (
    <div className={styles.text}>
      <div className={styles.title}>{photo_title} {description}</div>
      <div className={styles.subtitle}>{date}</div>
      <div className={styles.title}><li><BarMan />&nbsp;{user_name}</li></div>
      <div className={styles.subtitle}>
        <ul><PersonRed /><Person />
          {id + 4}<Star />
          {id}</ul>
      </div>
    </div>
  )
}

export default Text;
