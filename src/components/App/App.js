import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Hero from '../Hero/Hero';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello everyone!</h2>
        <List title='Do shopping' imgUrl='https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
        <List title='Do laundry' imgUrl='https://images.pexels.com/photos/35016/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} />
        <List title={['Things to do ', <sup key='2'>soon!</sup>]}>
          <p>I'm planning on doing all these things sooner, rather than later!</p>
        </List>
      
      </main>
    )
  }
}

export default App;
