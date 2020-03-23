import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import '../../../static/css/Navbar.css';
import CategoryBuilder from './CategoryNavbar/CategoryBuilder';
import NavbarLinkBuilder from './NavbarLink/NavbarLinkBuilder';
class NavbarBuilder extends Component {

    render() {
        return (
            <div className='navbar-inner'>
                <Container>
                    <Navbar bsPrefix="navbar navbar-expand-lg navbar-light bg-light">
                        <CategoryBuilder />
                        <Navbar.Toggle bsPrefix="navbar-toggler" aria-controls="navbarContent" aria-expanded="false" />
                        <Navbar.Collapse id="navbarContent">
                            <NavbarLinkBuilder />
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default NavbarBuilder;