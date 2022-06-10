import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <i className='me-3'><img src="/assets/image/submitShape.png" alt="" /></i>
                                <div>
                                    <h1 className='fira'>Best agencies by region</h1>
                                    <h2 className='boldta'>Недание новости о компании</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 text-end">
                            <div className="myBtn">All Feeds</div>
                        </div> */}
                    </div>

                    <div className="cardsWrap">
                        <div className="row justify-content-center">
                            <div className="col-4 p-0">
                                <div className="cards">
                                    <h6 className='fira'>06 September, 2017</h6>
                                    <h4>Google On An Innovative VR Series, Named </h4>
                                    <div className="d-flex align-items-center">
                                        <h5 className='fira'><span>by</span>  James Hacon</h5>
                                        <div className="square"></div>
                                        <h5 className='fira'>10 Comments</h5>
                                    </div>
                                    <p>The Social Media Strategies Summit for marketers. This 3-day event feat-ures talks, and how-to tutorials.</p>
                                    <a className='fira' href="!#">Read More</a>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="cards img-bor">
                                    <h3>Social Media News</h3>
                                    <img className='w-100' src="/assets/image/card.jpeg" alt="" />
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="cards">
                                    <h6 className='fira'>06 September, 2017</h6>
                                    <h4>Google On An Innovative VR Series, Named </h4>
                                    <div className="d-flex align-items-center">
                                        <h5 className='fira'><span>by</span>   James Hacon</h5>
                                        <div className="square"></div>
                                        <h5 className='fira'>10 Comments</h5>
                                    </div>
                                    <p>The Social Media Strategies Summit for marketers. This 3-day event feat-ures talks, and how-to tutorials.</p>
                                    <a className='fira' href="!#">Read More</a>
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="cards img-bor">
                                    <h3>Social Media News</h3>
                                    <img className='w-100' src="/assets/image/card.jpeg" alt="" />
                                </div>
                            </div>
                            <div className="col-4 p-0">
                                <div className="cards">
                                    <h6 className='fira'>06 September, 2017</h6>
                                    <h4>Google On An Innovative VR Series, Named </h4>
                                    <div className="d-flex align-items-center">
                                        <h5 className='fira'><span>by</span>  James Hacon</h5>
                                        <div className="square"></div>
                                        <h5 className='fira'>10 Comments</h5>
                                    </div>
                                    <p>The Social Media Strategies Summit for marketers. This 3-day event feat-ures talks, and how-to tutorials.</p>
                                    <a className='fira' href="!#">Read More</a>
                                </div>
                            </div>

                            <div className="col-4 p-0">
                                <div className="cards img-bor">
                                    <h3>Social Media News</h3>
                                    <img className='w-100' src="/assets/image/card.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio