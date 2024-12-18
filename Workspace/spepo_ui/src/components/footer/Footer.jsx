import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            {/* <!-- Start Footer Area --> */}
            <footer className="footer">
                {/* <!-- Footer Top --> */}
                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer about">
                                    <div className="logo">
                                        <a href="index.html"><img src="/images/logo.png" alt="#" style={{width: "110px", height: "32px"}} /></a>
                                    </div>
                                    <p className="text">Spepo, the streetside sandwich loved by so many, is now one of the most iconic Vietnamese dishes. But its apparent simplicity is deceptive. Locals have reinvented the staple again and again, in every corner of the country. Exploring the bánh mì scene in Vietnam is one of the tastiest journeys you can take. To get you started, below are seven amazing bánh mì you must try.
                                    </p>
                                    <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+84 906 550 238</a></span></p>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer links">
                                    <h4>Information</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Faq</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer links">
                                    <h4>Customer Service</h4>
                                    <ul>
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer social">
                                    <h4>Get In Tuch</h4>
                                    {/* <!-- Single Widget --> */}
                                    <div className="contact">
                                        <ul>
                                            <li>342 - Kumai Ne Street.</li>
                                            <li>Việt Nam.</li>
                                            <li>spepo@gmail.com</li>
                                            <li>+84 906 550 238</li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-flickr"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Top --> */}
                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>Spepo@2023 - All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <img src="images/payments.png" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- /End Footer Area --> */}
        </>
    )
}

export default Footer