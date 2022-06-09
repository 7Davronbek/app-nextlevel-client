import React from 'react'

const WorksGalary = () => {
    return (
        <>
            <div id='work' className="worksGalary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="h1">Наши работы
                                {/* <span>OUR WORKS</span> */}
                            </h1>
                            <h2>Лучшее агентство по регионам</h2>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="cards">
                                <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                                <div className="content">
                                    <h3>6S Marketing</h3>
                                    <h4>Europe</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="cards">
                                <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                                <div className="content">
                                    <h3>Grow Digital Services</h3>
                                    <h4>Mena</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="cards">
                                <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                                <div className="content">
                                    <h3>Adelphi Digital</h3>
                                    <h4>Asia</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="cards">
                                <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                                <div className="content">
                                    <h3>Edenspiekermann</h3>
                                    <h4>Canada</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="cards">
                                <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                                <div className="content">
                                    <h3>Get Started</h3>
                                    <h4>Australia</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="cards">
                                <img src="/assets/image/card.jpeg" alt="" className="w-100" />
                                <div className="content">
                                    <h3>Momentum Design</h3>
                                    <h4>Canada</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksGalary