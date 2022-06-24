import React from 'react'

const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <div className='d-flex align-items-center menuWrap'>
                                <a href="#aboutUs">О нас</a>
                                <a href="#service">Услуги</a>
                                <a href="#work">Наши работы</a>
                                <a href="#news">Новости</a>
                                {/* <div className="burger">
                                    <span><img src="/assets/image/burger.png" alt="" /></span>
                                    MENU
                                </div> */}
                                {/* <div className="search"><img src="/assets/image/search.png" alt="" /></div> */}
                            </div>
                            {/* <div className="logo"><img src="/assets/image/logo.png" alt="" /></div> */}
                            <h6><a href="#forms">Оставить заявку</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu