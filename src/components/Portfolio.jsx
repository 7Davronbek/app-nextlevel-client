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
                        <div className="col-lg-6">
                            <div className="myBtn">All Feeds</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio