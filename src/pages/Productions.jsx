import React from 'react'
import Product from '../components/Product'

const Productions = () => {
    return (
        <>
            <div className="myWrap">
                <div className="bg1"><img src="/assets/image/bgLeft.png" alt="" /></div>
                <div className="bg2"><img src="/assets/image/leftBottom.png" alt="" /></div>
                <div className="bg3"><img src="/assets/image/rightTop.png" alt="" /></div>
                <div className="bg4"><img src="/assets/image/rightBottom.png" alt="" /></div>

                <Product />
            </div>

            
        </>
    )
}

export default Productions