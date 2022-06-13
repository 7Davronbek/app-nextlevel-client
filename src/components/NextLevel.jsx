import React, { useState, useEffect } from 'react'

const NextLevel = () => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div style={{ transform: 'translateX(-850px)' }} className="nextParralax">
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * 0.2}px)` }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * 0.2}px)`, }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * 0.2}px)`, }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * 0.2}px)`, }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * 0.2}px)` }} />
            </div>
            <div style={{ transform: 'translateX(850px)' }} className="nextParralax">
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * -0.2}px)` }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * -0.2}px)`, }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * -0.2}px)`, }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * -0.2}px)`, }} />
                <img alt='' src='/assets/icon/logo.png' className='boldta' style={{ transform: `translateX( ${offsetY * -0.2}px)` }} />
            </div>
        </>
    )
}

export default NextLevel