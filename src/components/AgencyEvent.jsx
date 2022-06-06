import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {
    //  Autoplay,
    Pagination, Navigation
} from "swiper";

const AgencyEvent = () => {
    return (
        <>
            <div className="agencyEvent">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Agency Recent Events</h1>
                            <h2 className="fira">what’s happening in the digital world</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-9 mx-auto">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="wrap ">
                                                <div><div className="myBtn">Social Media Events</div>
                                                    <h3>Social Media Strategies Summit New York 2017</h3>
                                                    <div className="d-flex align-items-center justify-content-end mb-4">
                                                        <h6 className="fira">New York</h6>
                                                        <div className="i"></div>
                                                        <h6 className="fira">06 September, 2017</h6>
                                                    </div>
                                                    <p>The Social Media Strategies Summit New York is the must-attend event for marketers. This 3-day event features hands-on intensive workshops, talks, and how-to tutorials.</p>
                                                    <a className='fira' href="!#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            {/* <div className='img'> */}
                                            <img className='w-100' src="/assets/image/card.jpeg" alt="" />
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgencyEvent