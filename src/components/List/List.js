import React, { Component } from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    imgUrl: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgUrl={this.props.imgUrl} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column  title='Check' />
          <Column  title='Find' />
          <Column  title='Make' />
        </div>
      </section>
    );
  }
}

export default List;