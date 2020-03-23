import React, { Component } from 'react';
import '../../../../static/css/Navbar.css';
import Category from './Category';

class CategoryBuilder extends Component {
    state = {
        multiSelect: [
            "Televisions",
            "Headphones",
            "Computers",
            "Appliances",
            "Mobiles",
            "Tv & Video",
            "iPad & Tablets",
            "Cameras & Camcorders",
            "Home Audio & Theater"
        ]
    }
    render() {
        return (
            <div className={this.props.bsPrefix ? this.props.bsPrefix : this.props.className ? this.props.className + 'agileits-navi_search' + "mr-sm-4" : 'agileits-navi_search mr-sm-4'}>
                <Category multiSelect={this.state.multiSelect} />
            </div>
        )
    }
}

export default CategoryBuilder;