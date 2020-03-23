import React , { Component } from 'react';
import NavbarLink from './NavbarLink';

class NavbarLinkBuilder extends Component{
    state = {
        links: [
            {
                dropdown:false,
                name: "Home",
                // header: "",
                // colSize
                href: "/",

            },
            {
                dropdown: true,
                name: "Electronics",
                lists:{
                    list_1:{
                        colSize: "sm-6",
                        header: "Mobiles",
                        list: [
                            {
                                name:"All Mobile Phones",
                                href: "/product",
                            },
                            {
                                name: "All Mobile Accessories",
                                href: "/product",
                            },
                            {
                                name: "Cases & Covers",
                                href: "/product",
                            },
                            {
                                name: "Screen Protectors",
                                href: "/product",
                            },
                            {
                                name: "Power Banks",
                                href: "/product",
                            },
                            {
                                name: "All Certified Refurbished",
                                href: "/product",
                            },
                            {
                                name: "Tablets",
                                href: "/product",
                            },
                            {
                                name: "Wearable Devices",
                                href: "/product",
                            },
                            {
                                name: "Smart Home",
                                href: "/product",
                            },
                        ],
                    },
                    list_2:{
                        colSize: "sm-6",
                        header: "Computers",
                        list: [
                            {
                                name:"Laptops",
                                href: "products.html",
                            },
                            {
                                name:"Drives & Storage",
                                href: "products.html",
                            },
                            {
                                name:"Printers & Ink",
                                href: "products.html",
                            },
                            {
                                name:"Networking Devices",
                                href: "products.html",
                            },
                            {
                                name:"Computer Accessories",
                                href: "products.html",
                            },
                            {
                                name:"Game Zone",
                                href: "products.html",
                            },
                            {
                                name:"Software",
                                href: "products.html",
                            },
                        ]
                    }
                }
            },
            {
                dropdown: true,
                name: "Appliances",
                lists:{
                    list_1:{
                        colSize: "sm-6",
                        header: "Tv , Electronics",
                        list:[
                            {
                                name: "Televisions",
                                href: "/product",
                            },
                            {
                                name: "Home Entertainment Systems",
                                href: "/product",
                            },
                            {
                                name: "Headphones",
                                href: "/product",
                            },
                            {
                                name: "Speakers",
                                href: "/product",
                            },
                            {
                                name: "MP3, Media Players & Accessories",
                                href: "/product",
                            },
                            {
                                name: "Audio & Video Accessories",
                                href: "/product",
                            },
                            {
                                name: "Cameras",
                                href: "/product",
                            },
                            {
                                name: "DSLR Cameras",
                                href: "/product",
                            },
                            {
                                name: "Camera Accessories",
                                href: "/product",
                            },
                        ]
                    },
                    list_2: {
                        colSize: "sm-6",
                        header: "Appliances",
                        list:[
                            {
                                name: "Musical Instruments",
                                href: "/product",
                            },
                            {
                                name: "Gaming Consoles",
                                href: "/product",
                            },
                            {
                                name: "All Electronics",
                                href: "/product",
                            },
                            {
                                name: "Air Conditioners",
                                href: "/product",
                            },
                            {
                                name: "Refrigerators",
                                href: "/product",
                            },
                            {
                                name: "Washing Machines",
                                href: "/product",
                            },
                            {
                                name: "Kitchen & Home Appliances",
                                href: "/product",
                            },
                            {
                                name: "Heating & Cooling Appliances",
                                href: "/product",
                            },
                            {
                                name: "All Appliances",
                                href: "/product",
                            },
                        ]
                    }
                }
            },
            {
                dropdown:false,
                name: "About Us",
                href: "/about",
            },
            {
                dropdown:false,
                name: "New Arrivals",
                href: "/arrivals",
            },
            {
                dropdown:false,
                name: "Contact Us",
                href: "/contact",
            },
        ],
    }
    render() {
        return (
           
            <NavbarLink links={this.state.links}/>
        )
    }
}

export default NavbarLinkBuilder;