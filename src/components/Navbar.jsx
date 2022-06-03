import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex aling-items-center">

                            <h6>Stay Connected:</h6>

                            <div className="socials">
                                <span><img src="/assets/image/f.png" alt="" /></span>
                                <span><img src="/assets/image/twit.png" alt="" /></span>
                                <span><img src="/assets/image/ln.png" alt="" /></span>
                                <span><img src="/assets/image/g.png" alt="" /></span>
                            </div>

                            <a href="!#">Advertise</a>
                            <a href="!#">Support Forum </a>
                            <a href="!#">Contact </a>

                            <div className="ms-auto">
                                <a href="!#"><span className="me-3"><img src="/assets/image/phone.png" alt="" /></span> 998 90 000 00 00</a>
                                <a href="!#">English</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar