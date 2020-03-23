import React , { Component } from 'react';
import TopHeader from './Topheader';
import { Container } from 'react-bootstrap';
class TopHeaderBuilder extends Component{
    render() {
        return (
            <div className="agile-main-top">
            <Container bsPrefix="container-fluid">
                <TopHeader />
            </Container>
        </div>
        )
    }
}

export default TopHeaderBuilder;