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
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="../assets/icon/logo.png" alt="" />
                                    </a>
                                </div>
                                <p className='log-p mb-3'>
                                   Вас приветствует рекламно-производственная
                                    компания ООО «NEXT LEVEL» работающая под торговой маркой «Деловой Город»!
                                </p>
                            </div>
                        </div>
                        <div className="col-2 offset-1">
                            <div className="widget">
                                <h4 className="widget-title">Меню</h4>
                                <ul className="footer-links flex-column d-flex">
                                    <a className='mt-4' href="#aboutUs">О нас</a>
                                    <a className='mt-4' href="#service">Услуги</a>
                                    <a className='mt-4' href="#work">Наши работы</a>
                                    <a className='mt-4' href="#news">Новости</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 text-end">
                            <div className="widget">
                                <h4 className="widget-title">Контакты</h4>
                                <div className="footer-contact  align-items-center d-flex justify-content-end">
                                    {/* <div className="img me-3" >
                                    <img src="../assets/image/footerTel.png" alt="" />
                                </div> */}
                                    <div className="text-left d-flex flex-column">
                                        <a href="tel:+998781297070">+998 78 129 70 70</a>
                                        {/* <span>Online</span> */}
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <p></p>
                                </div>

                                <div className="footer-social">
                                    <h6>Следите за нами:</h6>
                                    <div className="d-flex align-items-center justify-content-end">
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

                                <div>
                                    <a target={'_blank'} rel="noreferrer" className='mt-3 d-block' href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@nextlevel.uz">info@nextlevel.uz</a>
                                </div>

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