import React , { Component } from 'react';
import TopHeaderBuilder from './Topheader/TopheaderBuilder';
import BottomHeader from './Bottomheader/Bottomheader';

class HeaderBuilder extends Component{
    scrollTopHandler = ()=>{

    }
    render() {
        return (
            <React.Fragment>
                <TopHeaderBuilder />
                <BottomHeader />
                        
               
            </React.Fragment>
        )
    }
}

export default HeaderBuilder;