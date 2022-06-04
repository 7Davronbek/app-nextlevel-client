import React from 'react'

const SumbitAgency = () => {
    return (
        <>
            <div className="sumbitAgency">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cards">
                                <div className="left">
                                    <div className='me-3'><img src="/assets/image/submitShape.png" alt="" /></div>
                                    <div>
                                        <h1 className='fira'>Best agencies by region</h1>
                                        <h2>Submit Your Agency</h2>
                                    </div>
                                </div>
                                <h3 className='fira'>Do you want to get listed among the leading agencies of the world</h3>
                                <div className="d-flex align-items-center">
                                    <button className="btn myBtn pink">Submit Now</button>
                                    <button className="btn myBtn black">All Agencies</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SumbitAgency