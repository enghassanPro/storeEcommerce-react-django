import React, { Component } from 'react';
import CarouselItem from './CarouselItem';

class Carousel extends Component {
    state = {
        carouselItem: [
            {
                p: "Get flat",
                p_span: "10%",
                p_content: "Cashback",
                h_p: "The",
                h_span: "Big",
                h_content: "Sale",
                a_href: "product.html",
                a_name: "Shop Now ",
            },
            {
                p: "advanced",
                p_span: "Wireless",
                p_content: "earbuds",
                h_p: "Best",
                h_span: "Headphone",
                h_content: "",
                a_href: "product.html",
                a_name: "Shop Now ",
            },
            {
                p: "Get flat",
                p_span: "10%",
                p_content: "Cashback",
                h_p: "New",
                h_span: "Standard",
                h_content: "",
                a_href: "product.html",
                a_name: "Shop Now ",
            },
            {
                p: "Get Now",
                p_span: "40%",
                p_content: "Discount",
                h_p: "Today",
                h_span: "Discount",
                h_content: "",
                a_href: "product.html",
                a_name: "Shop Now ",
            },

        ],
    }
    render() {
        return (
            <CarouselItem items={this.state.carouselItem} />
        )
    }
}

export default Carousel;