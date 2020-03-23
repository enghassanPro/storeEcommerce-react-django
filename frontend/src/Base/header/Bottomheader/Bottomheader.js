import React, { Component } from 'react';
import '../../../../static/css/Bottomheader.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../../../static/images/logo2.png';
import { Link } from 'react-router-dom';
class BottomHeader extends Component {
    render() {
        return (
            <div className='header-bot'>
                <Container>
                    <Row>
                        <Col bsPrefix="col-md-3" className='logo_agile'>
                            <h1 className="text-center">
                                <Link to="/" className="font-weight-bold font-italic">
                                    <img src={logo} alt="logo2" className="img-fluid" />Electro Store
                                </Link>
                            </h1>
                        </Col>
                        <Col bsPrefix="col-md-9 header mt-4 mb-md-0 mb-4">
                            <Row>
                                <Col bsPrefix="col-10" className='agileits_search'>
                                    <form className="form-inline" action="#" method="post">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </Col>
                                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                        <form action="#" method="post" className="last">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <button className="btn w3view-cart" type="submit" name="submit" value="">
                                                <i className="fa fa-cart-arrow-down" ></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BottomHeader;
