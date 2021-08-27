import React, { Component } from 'react';
import styles from './List.scss';

class List extends Component {
  render() {
    return (
      <section className={styles.component}>
        <h2>My list of things</h2>
      </section>
    );
  }
}

export default List;