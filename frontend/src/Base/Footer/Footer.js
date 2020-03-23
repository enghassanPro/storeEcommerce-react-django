import React, { Component } from 'react';
import '../../../static/css/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faDolly, faShippingFast, faThumbsUp, faMapMarker,
// 	faPhone, faEnvelopeOpen, faMobile
// }
// 	from '@fortawesome/free-solid-svg-icons';
import pay4 from "../../../static/images/pay4.png";
import pay1 from "../../../static/images/pay1.png";
import pay2 from "../../../static/images/pay2.png";
import pay3 from "../../../static/images/pay3.png";
import pay5 from "../../../static/images/pay5.png";
import pay6 from "../../../static/images/pay6.png";
import pay7 from "../../../static/images/pay7.png";
import pay8 from "../../../static/images/pay8.png";
import pay9 from "../../../static/images/pay9.png";

import { Link } from 'react-router-dom';
class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<footer>
					<div className="footer-top-first">
						<Container className="py-md-5 py-sm-4 py-3">
							<h2 className="footer-top-head-w3l font-weight-bold mb-2">Electronics :</h2>
							<p className="footer-main mb-4">
								If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to
                                find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets
                                and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.</p>
							<Row className="w3l-grids-footer border-top border-bottom py-sm-4 py-3">
								<Col md={4} className="offer-footer">
									<Row>
										<Col bsPrefix="col-4" className="icon-fot">
											<i className="fas fa-dolly"></i>
										</Col>
										<Col bsPrefix="col-8" className="text-form-footer">
											<h3>Free Shipping</h3>
											<p>on orders over $100</p>
										</Col>
									</Row>
								</Col>
								<Col md={4} className="my-md-0 my-4 offer-footer">
									<Row>
										<Col bsPrefix="col-4" className="icon-fot">
											<i className="fas fa-shipping-fast"></i>
										</Col>
										<Col bsPrefix="col-8" className="text-form-footer">
											<h3>Fast Delivery</h3>
											<p>World Wide</p>
										</Col>
									</Row>
								</Col>
								<Col md={4} className="offer-footer">
									<Row>
										<Col bsPrefix="col-4" className="icon-fot">
											<i className="fas fa-thumbs-up"></i>
										</Col>
										<Col bsPrefix="col-8" className="text-form-footer">
											<h3>Big Choice</h3>
											<p>of Products</p>
										</Col>
									</Row>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="w3l-middlefooter-sec">
						<Container className="py-md-5 py-sm-4 py-3">
							<Row className="footer-info">
								<Col md={3} sm={6} className="footer-grids">
									<h3 className="text-white font-weight-bold mb-3">Categories</h3>
									<ul>
										<li className="mb-3">
											<a href="product.html">Mobiles </a>
										</li>
										<li className="mb-3">
											<a href="product.html">Computers</a>
										</li>
										<li className="mb-3">
											<a href="product.html">TV, Audio</a>
										</li>
										<li className="mb-3">
											<a href="product2.html">Smartphones</a>
										</li>
										<li className="mb-3">
											<a href="product.html">Washing Machines</a>
										</li>
										<li>
											<a href="product2.html">Refrigerators</a>
										</li>
									</ul>
								</Col>
								<Col md={3} sm={6} className="mt-sm-0 mt-4 footer-grids">
									<h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
									<ul>
										<li className="mb-3">
											<a href="about.html">About Us</a>
										</li>
										<li className="mb-3">
											<a href="contact.html">Contact Us</a>
										</li>
										<li className="mb-3">
											<a href="help.html">Help</a>
										</li>
										<li className="mb-3">
											<a href="faqs.html">Faqs</a>
										</li>
										<li className="mb-3">
											<a href="terms.html">Terms of use</a>
										</li>
										<li>
											<a href="privacy.html">Privacy Policy</a>
										</li>
									</ul>
								</Col>
								<Col md={3} sm={6} className="mt-md-0 mt-4 footer-grids">
									<h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
									<ul>
										<li className="mb-3">
											<i className="fa fa-map-marker"></i>123 Sebastian, USA.</li>
										<li className="mb-3">
											<i className="fa fa-mobile"></i>333 222 3333 </li>
										<li className="mb-3">
											<i className="fa fa-phone"></i>+222 11 4444 </li>

										<li className="mb-3">
											<i className="fa fa-envelope-open"></i>
											<a href="mailto:example@mail.com"> mail 1@example.com</a>
										</li>
										<li>
											<i className="fa fa-envelope-open"></i>
											<a href="mailto:example@mail.com"> mail 2@example.com</a>
										</li>
									</ul>
								</Col>
								<Col md={3} sm={6} className="mt-md-0 mt-4 w3l-agileits footer-grids">
									<h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
									<p className="mb-3">Free Delivery on your first order!</p>
									<form action="#" method="post">
										<div className="form-group">
											<input type="email" className="form-control mr-1" placeholder="Email" name="email" required="" />
											<input type="submit" value="Go" />
										</div>
									</form>
									<div className="footer-grids w3l-socialmk mt-3">
										<h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
										<div className="social">
											<ul>
												<li>
													<a className="icon fb" href="#s">
														<i className="fab fa-facebook-f"></i>
													</a>
												</li>
												<li>
													<a className="icon tw" href="#">
														<i className="fab fa-twitter"></i>
													</a>
												</li>
												<li>
													<a className="icon gp" href="#">
														<i className="fab fa-google-plus-g"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="py-md-5 py-sm-4 py-3 agile-sometext">
						<Container>
							<div className="sub-some">
								<h5 className="font-weight-bold mb-2">Mobile & Tablets :</h5>
								<ul>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Android Phones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Smartphones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Feature Phones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Unboxed Phones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Refurbished Phones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2"> Tablets</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">CDMA Phones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Value Added Services</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Sell Old</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Used Mobiles</a>
									</li>
								</ul>
							</div>
							<div className="sub-some mt-4">
								<h5 className="font-weight-bold mb-2">Computers :</h5>
								<ul>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Laptops </a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Printers</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Routers</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Ink & Toner Cartridges</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Monitors</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Video Games</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Unboxed & Refurbished Laptops</a>
									</li>
									<li>
										<a href="product.html" className="border-right pr-2">Assembled Desktops</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Data Cards</a>
									</li>
								</ul>
							</div>
							<div className="sub-some mt-4">
								<h5 className="font-weight-bold mb-2">TV, Audio & Large Appliances :</h5>
								<ul>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">TVs & DTH</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Home Theatre Systems</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Hidden Cameras & CCTVs</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Refrigerators</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Washing Machines</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2"> Air Conditioners</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Cameras</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Speakers</a>
									</li>
								</ul>
							</div>
							<div className="sub-some mt-4">
								<h5 className="font-weight-bold mb-2">Mobile & Laptop Accessories :</h5>
								<ul>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Headphones</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Power Banks </a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Backpacks</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Mobile Cases & Covers</a>
									</li>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Pen Drives</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">External Hard Disks</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2"> Mouse</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Smart Watches & Fitness Bands</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">MicroSD Cards</a>
									</li>
								</ul>
							</div>
							<div className="sub-some mt-4">
								<h5 className="font-weight-bold mb-2">Appliances :</h5>
								<ul>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Trimmers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Hair Dryers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Emergency Lights</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Water Purifiers </a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Electric Kettles</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Hair Straighteners</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Induction Cooktops</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Sewing Machines</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2"> Geysers</a>
									</li>
								</ul>
							</div>
							<div className="sub-some mt-4">
								<h5 className="font-weight-bold mb-2">Popular on Electro Store</h5>
								<ul>
									<li className="m-sm-1">
										<a href="product.html" className="border-right pr-2">Offers & Coupons</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Couple Watches</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Gas Stoves</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2"> Air Coolers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Air Purifiers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Headphones</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2"> Headsets</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Pressure Cookers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Sandwich Makers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Air Friers</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Irons</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">LED TV</a>
									</li>
									<li className="m-sm-1">
										<a href="product2.html" className="border-right pr-2">Sandwich Makers</a>
									</li>
								</ul>
							</div>
							<div className="sub-some child-momu mt-4">
								<h5 className="font-weight-bold mb-3">Payment Method</h5>
								<ul>
									<li>
										<img src={pay2} alt="" />
									</li>
									<li>
										<img src={pay5} alt="" />
									</li>
									<li>
										<img src={pay1} alt="" />
									</li>
									<li>
										<img src={pay4} alt="" />
									</li>
									<li>
										<img src={pay6} alt="" />
									</li>
									<li>
										<img src={pay3} alt="" />
									</li>
									<li>
										<img src={pay7} alt="" />
									</li>
									<li>
										<img src={pay8} alt="" />
									</li>
									<li>
										<img src={pay9} alt="" />
									</li>
								</ul>
							</div>
						</Container>
					</div>
				</footer>
				<div className="py-3 copy-right">
					<Container>
						<p className="text-center text-white">© 2020 Electro Store. All rights reserved | Design by
							<Link to="/"> React Js</Link>
						</p>
					</Container>
				</div>
			</React.Fragment >
		)
	}
}
export default Footer;
