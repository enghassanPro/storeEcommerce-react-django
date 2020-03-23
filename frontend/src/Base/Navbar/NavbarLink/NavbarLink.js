import React, { Component } from 'react';
import { NavDropdown, Row, Col } from 'react-bootstrap';
import '../../../../static/css/Navbar.css';
import { Link } from 'react-router-dom';

class NavbarLink extends Component {

    render() {
        const links = this.props.links.map((link, i) => {
            if (link.dropdown) {
                return (
                    <li key={link.name + i} className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                        <NavDropdown key={link.name + i} title={link.name} id={`${link.name}-dropdown`}>
                            <div className="p-4 agile_inner_drop_nav_info">
                                <Row>
                                    {
                                        Object.keys(link.lists).map((list, i) => (
                                            <Col key={list + i} bsPrefix={"col-" + link.lists[list].colSize}>
                                                <h5 className="mb-3">{link.lists[list].header}</h5>
                                                <ul className="multi-column-dropdown">
                                                    {
                                                        link.lists[list].list.map((data, k) => (
                                                            <li key={data.name + k}>

                                                                <NavDropdown.Item style={{ padding: "0.25rem 0.5rem" }} as={Link} to={data.href} >
                                                                    {/* <Link to={data.href}> 
                                                                    </Link> */}
                                                                    {data.name}
                                                                </NavDropdown.Item>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </Col>
                                        ))
                                    }

                                </Row>
                            </div>
                        </NavDropdown>
                    </li>
                );
            } else {
                return (
                    <li key={link.name + i} className="nav-item mr-lg-2 mb-lg-0 mb-2">
                        <Link to={link.href} className="nav-link">{link.name}</Link>
                        {/* <a className="nav-link" href={link.href}>{link.name}</a> */}
                    </li>
                )
            }
        })
        return (
            <ul className="navbar-nav mr-auto  text-center mr-xl-5">
                {links}
            </ul>
        )
    }
}

export default NavbarLink;