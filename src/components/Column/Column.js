import React, { Component } from 'react';
import styles from './Column.scss'
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon';

class Column extends Component {
  static propTypes = {
    title: PropTypes.string,
    
  }

  state= {
    cards: this.props.cards
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ));
  }


  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
          {this.props.title}
        </h3>
        
        {this.state.cards.map(({key, ...cardsProps}) => <Card key={key} {...cardsProps} />)}
        <div className={styles.creator}>
          <Creator text={settings.cardsCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}

export default Column;