import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (

        <>
            <div className='footer'>
                <div className="container">
                    {/* <div className="titles">
                    <h1><span>Subscribe to our</span> newsletter</h1>
                    <h2 className="fira">what’s happening in the digital world</h2>
                </div> */}
                    {/* <div className="email text-center">
                    <input type="email" placeholder='Enter your email here' />
                    <div className="send">
                        <button>Subscribe news later</button>
                    </div>
                </div> */}
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 text-center ">
                            <div className="widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="../assets/icon/logo.png" alt="" />
                                    </a>
                                </div>
                                {/* <p className='log-p mb-3'>
                                    Вас приветствует рекламно-производственная
                                    компания ООО «NEXT LEVEL» работающая под торговой маркой «Деловой Город»!
                                </p> */}
                            </div>
                        </div>
                        <div className="col-lg-4 text-center ">
                            <div className="widget">
                                <h4 className="widget-title">Меню</h4>
                                <ul className="footer-links flex-column d-flex">
                                    <a className='widget_phone' href="">+998903007070</a>
                                </ul>
                                <div className="footer-social">
                                    <div className="d-flex align-items-center justify-content-center justify-content-center">
                                        <a target={'_blank'} rel="noreferrer" href="!#">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                        <a target={'_blank'} rel="noreferrer" href="!#">
                                            <FontAwesomeIcon icon={faTelegram} />
                                        </a>
                                        {/* <a href="!#">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a> */}
                                        <a className='m-0' target={'_blank'} rel="noreferrer" href="!#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </div>
                                </div>
                                <ul className="footer-links flex-column d-flex">
                                    <a className='widget_phone' href="">info@gmail.com</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center ">
                            <div className="widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="../assets/icon/logo.png" alt="" />
                                    </a>
                                </div>
                                {/* <p className='log-p mb-3'>
                                    Вас приветствует рекламно-производственная
                                    компания ООО «NEXT LEVEL» работающая под торговой маркой «Деловой Город»!
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="koko">
                <a target={'_blank'} rel="noreferrer" href="https://kokoagency.uz/#/">© 2022 NEXT LEVEL by <span>kOkO Digital Agency</span></a>
            </div>
        </>
    )
}

export default Footer