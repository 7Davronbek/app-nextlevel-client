import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div style={{ backgroundColor: "#fff" }} className="gif py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            {/* <video src="/assets/image/gif.mp4"></video> */}
                            <Link to='/'>
                                <video className='video'
                                    autoPlay
                                    loop
                                    playsInline
                                    muted >
                                    <source
                                        src="/assets/image/gif.mp4"
                                        type="video/mp4"
                                        id="bgvid"
                                    />
                                </video>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12 myCol d-flex align-items-center">
                            <div className='d-flex align-items-center menuWrap'>
                                <Link to="/productions">Продукция и услуги</Link>
                                <Link to="/contacts">Контакты</Link>
                                <Link to="/about-us">О нас </Link>
                                <Link to="/vacancies">Вакансии</Link>
                            </div>
                            <div className="socials">
                                <a href="#"><img src="/assets/icon/insta.svg" alt="" /></a>
                                <a href="#"><img src="/assets/icon/tg.svg" alt="" /></a>
                                <a href="#"><img src="/assets/icon/fb.svg" alt="" /></a>
                                <a href="#"><img src="/assets/icon/mail.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu