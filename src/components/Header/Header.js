import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon';
import Search from '../Search/Search';

const Header = () => {
  return (
    <header className={styles.component}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to='/'>
            <Icon name='book' />
          </Link>
          <Search />
          <nav>
            <NavLink exact to='/' activeClassName='active' >Home</NavLink>
            <NavLink exact to='/info' activeClassName='active' >Info</NavLink>
            <NavLink exact to='/FAQ' activeClassName='active' >FAQ</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;