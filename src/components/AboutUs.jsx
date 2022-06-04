import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="aboutUs">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <div className="wrap">
                                <div className="design">Design</div>
                                <div className="strategy">Strategy</div>
                                <div className="km">400+ кв.м. производственной площади</div>
                                <div className="public">Public Relations</div>
                                <div className="third">30+ Квалифицированных сотрудников </div>
                                <div className="ten">10 лет опыта</div>
                                <div className="fifth">5000+ Реализованных  проектов  в год </div>
                                {/* <div className="mid"><img src="/assets/image/aboutShape.png" alt="" /></div> */}
                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                            <h1>Next level</h1>
                            <h2>Деловой Город </h2>
                            <h3>Рекламно производственная компания</h3>
                            <h4>Bears delivers bespoke public relations and marketing, underpinned by clever thinking, market insight, and a set of business ethics that ensure we get the best results for our clients. For us public relations is no dying art, it is a skill that’s very much alive alongside social, digital and traditional marketing.</h4>
                            <h5>We are a team of passionate media relations professionals, writers, digital marketers and creative designers. Our clients are big and small, UK and international, operating in many different sectors.</h5>
                            <button className='btn  myBtn'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs