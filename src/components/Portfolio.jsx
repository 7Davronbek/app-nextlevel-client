import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <i className='me-3'><img src="/assets/image/submitShape.png" alt="" /></i>
                                <div>
                                    <h1 className='fira'>Best agencies by region</h1>
                                    <h2>Recent News & Feed</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <div className="myBtn">All Feeds</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="cardsWrap">
                            <div className="cards">
                                <h3>06 September, 2017</h3>
                                <h4>Google On An Innovative VR Series, Named </h4>
                                <div className="d-flex align-items-center">
                                    <h5>by  James Hacon</h5>
                                    <div className="square"></div>
                                    <h5>10 Comments</h5>
                                </div>
                                <p>The Social Media Strategies Summit for marketers. This 3-day event feat-ures talks, and how-to tutorials.</p>
                                <a href="!#">Read More</a>
                            </div>
                            <div className="cards">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio