import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="titles">
                    <h1><span>Subscribe to our</span> newsletter</h1>
                    <h2 className="fira">what’s happening in the digital world</h2>
                </div>
                <div className="email text-center">
                    <input type="email" placeholder='Enter your email here' />
                    <div className="send">
                        <button>Subscribe news later</button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3">
                        <div className="widget">
                            <div className="logo">
                                <a href="/">
                                    <img src="../assets/icon/logo.png" alt="" />
                                </a>
                            </div>
                            <p className='log-p mb-3'>Our public relations and marketing agency,
                                based in Cambridge, works to a set of ethi-
                                cs and principles that reflect our sense of
                                social responsibility.
                            </p>
                            <p className='log-p'>Promised PR and marketing results for
                                our clients.</p>
                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className="widget">
                            <h4 className="widget-title">Agencies Of The Month</h4>
                            <ul className="footer-links">
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                                <li><a href="#">Main page</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="widget">
                            <h4 className="widget-title">Company Number</h4>
                            <div className="footer-contact justify-content-between align-items-center d-flex">
                                <div className="img">
                                    <img src="../assets/image/footerTel.png" alt="" />
                                </div>
                                <div className="text d-flex flex-column">
                                    <a href="tel:+998999992727">+998 90 900 00 99</a>
                                    <span>We Are Available 24/7</span>
                                </div>
                            </div>
                            <div className="footer-social">
                                <h6>Follow Us On</h6>
                                <div className="d-flex align-items-center">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer