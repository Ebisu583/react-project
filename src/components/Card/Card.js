import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


const Card = (props) => {

  const {title} = props;
  return (
    <div className={styles.component}>
      <h4>{title}</h4>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,  
};
export default Card;