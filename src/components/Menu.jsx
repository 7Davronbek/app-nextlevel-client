import React from 'react'

const Menu = () => {
    return (
        <>
            <div style={{ backgroundColor: "#fff" }} className="gif py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            {/* <video src="/assets/image/gif.mp4"></video> */}
                            <video className='video'
                                autoPlay
                                loop
                                playsInline
                                muted >
                                <source
                                    src="/assets/image/gif2.mp4"
                                    type="video/mp4"
                                    id="bgvid"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12 myCol d-flex align-items-center">
                            <div className='d-flex align-items-center menuWrap'>
                                <a href="#aboutUs">Продукция и услуги</a>
                                <a href="#service">Контакты</a>
                                <a href="#work">О нас </a>
                                <a href="#news">Вакансии</a>
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