import React, { Component } from 'react';
import '../../../../static/css/Banner.css';

class CarouselControl extends Component {
    render() {
        return (
            <React.Fragment>
                <a className="carousel-control-prev carousel-control-prv" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next carousel-control-nxt" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </React.Fragment>
        )
    }
}

export default CarouselControl;