import React from 'react'
import AboutUs from '../components/AboutUs'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Forms from '../components/Forms'
import GridLayout from '../components/GridLayout'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Main = () => {
    return (
        <>
            <Menu />
            <Header />
            <div className="myWrap">
                <div className="bg1"><img src="/assets/image/bgLeft.png" alt="" /></div>
                <div className="bg2"><img src="/assets/image/leftBottom.png" alt="" /></div>
                <div className="bg3"><img src="/assets/image/rightTop.png" alt="" /></div>
                <div className="bg4"><img src="/assets/image/rightBottom.png" alt="" /></div>
                <AboutUs />
                <GridLayout />
            </div>
            <Benefits />
            {/* <NextLevel /> */}
            {/* <WorksGalary /> */}
            {/* <SumbitAgency /> */}
            {/* <LookingFor /> */}
            {/* <AgencyEvent /> */}
            {/* <Portfolio /> */}
            {/* <Partners /> */}
            <Forms />
            <Footer />
        </>
    )
}

export default Main