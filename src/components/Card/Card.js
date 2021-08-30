import React from 'react';
import styles from './Card.scss';

const Card = (props) => {
  return (
    <div className={styles.component}>
      <h4>{props.title}</h4>
    </div>
  );
};

export default Card;