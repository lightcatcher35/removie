import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {
    Container,
    Image,
    Menu,
  } from 'semantic-ui-react'
  
const HeaderNav = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as={Link} to='/' header>
                <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
                Movie Project
                </Menu.Item>
                <Menu.Item as={Link} to='/'>Home</Menu.Item>
                <Menu.Item exact as={NavLink} to='/movies' >Movies</Menu.Item>
                <Menu.Item exact as={NavLink} to='/movies/add' >Add Movie</Menu.Item>

            </Container>
        </Menu>
    );
}

export default HeaderNav;
