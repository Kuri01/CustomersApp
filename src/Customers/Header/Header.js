import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import styles from './Header.module.scss';
class Header extends React.Component {
  render() {
    return (
      <Navbar className={styles.mainContainer}>
        <Container>
          <Navbar.Brand href='#'>Customers app</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>made by Kamil Kuriata</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
