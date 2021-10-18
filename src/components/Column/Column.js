import React, { Component } from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon';

class Column extends Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  // state= {
  //   cards: this.props.cards
  // }

  // addCard(title){
  //   this.setState(state => (
  //     {
  //       cards: [
  //         ...state.cards,
  //         {
  //           key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
  //           title,
  //         }
  //       ]
  //     }
  //   ));
  // }


  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}

        {/* {cards.map(({key, ...cardsProps}) => <Card key={key} {...cardsProps} />)} */}
        <div className={styles.creator}>
          <Creator text={settings.cardsCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;