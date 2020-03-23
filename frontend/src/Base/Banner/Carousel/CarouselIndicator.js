import React , { Component } from 'react';

class CarouselIndicator extends Component{
    render() {
        let indicator = []
        for(var i=0 ; this.props.indicator > i ; i++){
            if ( i  < 1)
                indicator.push((<li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className="active"></li>))
            else
                indicator.push((<li key={i} data-target="#carouselExampleIndicators" data-slide-to={i}></li>))

        }
        return (
            <ol className="carousel-indicators" style={{bottom: "4%", cursor: "pointer"}}>
                {indicator}
            </ol>
        )
    }
}

export default CarouselIndicator;