import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">

                            {/* <h6>Stay Connected:</h6> */}

                            <div className="socials">
                                <span><img src="/assets/image/f.png" alt="" /></span>
                                {/* <span><img src="/assets/image/twit.png" alt="" /></span> */}
                                <span><img src="/assets/image/tg.png" alt="" /></span>
                                <span><img src="/assets/image/insta.png" alt="" /></span>
                            </div>

                            <div className="leftSide">

                                <a href="!#">ADVERTISE</a>
                                <a href="!#">SUPPORT FORUM </a>
                                <a href="!#">CONTACT</a>

                            </div>

                            <div className="ms-auto rightSide">
                                <a href="!#"><span className="me-3"><img src="/assets/image/phone.png" alt="" /></span> 998 90 000 00 00</a>
                                <a href="!#">Русский</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar