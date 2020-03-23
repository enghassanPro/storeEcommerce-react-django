import React, { Component } from 'react';
import '../../../../static/css/Banner.css';
import { Container } from 'react-bootstrap';

class CarouselItem extends Component {
    render() {
        return (
            <div className="carousel-inner">
                {
                    this.props.items.map((item, i) => (
                        <div key={i} className={`carousel-item carousel-it item${i + 1} ${i < 1 ? "active" : null}`}>
                            <Container>
                                <div className="w3l-space-banner">
                                    <div className={"carousel-cap carousel-caption p-lg-5 p-sm-4 p-3"}>
                                        <p>{item.p}<span>{item.p_span}</span> {item.p_content}</p>
                                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">
                                            {item.h_p}<span>{item.h_span}</span> {item.h_content}
                                        </h3>
                                        <a className="button2" href={item.a_href}>{item.a_name}</a>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CarouselItem;