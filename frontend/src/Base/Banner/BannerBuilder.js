import React , { Component } from 'react';
import Carousel from './Carousel/Carousel';
import CarouselIndicator from './Carousel/CarouselIndicator';
import CarouselControl from './Carousel/CarouselControl';

class BannerBuilder extends Component{
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <CarouselIndicator indicator="4" />
                <Carousel />
                <CarouselControl />
            </div>
        )
    }
}
export default BannerBuilder;