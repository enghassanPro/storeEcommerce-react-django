import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BannerBuilder from '../../Base/Banner/BannerBuilder';
import HeaderBuilder from '../../Base/header/HeaderBuilder';
import NavbarBuilder from '../../Base/Navbar/NavbarBuilder';
import Footer from '../../Base/Footer/Footer';

export default class Index extends Component {
    componentDidMount() {
        document.title = "Index"
    }
    render() {
        return (
            <React.Fragment>
                <HeaderBuilder />
                <NavbarBuilder />
                <BannerBuilder />
                <Footer />
            </React.Fragment>
            // <div style={{ background: "url('../../../static/images/banner1.jpg') no-repeat center", width: "100%", height: "664px" }}>
            //     <div style={{ background: 'rgba(0,0,0,0.6)', width: "100%", height: "100%" }}>

            //         <div style={{ fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace', fontSize: "2em", background: "transparent", width: '50%', margin: '20% 35%', position: 'absolute', padding: "10px", color: "#fff" }}>Thank You For Visiting My Project
            //             &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/login" className="btn btn-primary">Login Now</Link>
            //         </div>

            //     </div>
            // </div>
        )
    }
}