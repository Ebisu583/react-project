import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import ListContainer from '../List/ListContainer';
// import {pageContents, listData} from '../../data/dataStore';
// import Creator from '../Creator/Creator';
// import { settings } from '../../data/dataStore';


class App extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  // state = {
  //   lists: [listData] || [],
  // }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            columns: [],
          },
        ],
      }
    ));
  }

  // render() {
  //   return (
  //     <main className={styles.component}>
  //       <h1 className={styles.title}>{pageContents.title}</h1>
  //       <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
  //       {/* <List {...listData} /> */}
  //       {/* {this.state.lists.map(({key, ...listProps}) => <List key={key} {...listProps} />)} */}
  //       <div className={styles.creator}>
  //         <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
  //       </div>
      
  //     </main>
  //   );
  // }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListContainer key={listData.id} {...listData} />
        ))}
        {/*
        <List {...listData} />
        */}
      </main>
    );
  }
}

export default App;
