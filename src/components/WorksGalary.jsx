import React from 'react'

const WorksGalary = () => {
    return (
        <>
            <div className="worksGalary">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="h1">Наши работы</h1>
                            <h2>Best Agencies By Region</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                            <div className="content">
                                <h3>6S Marketing</h3>
                                <h4>Europe</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksGalary