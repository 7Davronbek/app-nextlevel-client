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
            <div style={{ transform: 'translateX(-650px)' }} className="nextParralax">
                <h1 className='fira' style={{ transform: `translateX( ${offsetY * 0.2}px)`, left: "-150px" }}>Next Level</h1>
                <h1 className='fira' style={{ transform: `translateX( ${offsetY * 0.2}px)` }}>Next Level</h1>
                <h1 className='fira' style={{ transform: `translateX( ${offsetY * 0.2}px)`, right: "-150px" }}>Next Level</h1>
            </div>
            <div style={{ transform: 'translateX(700px)' }} className="nextParralax pt-4">
                <h1 className='fira' style={{ transform: `translateX( ${offsetY * -0.2}px)`, left: "-150px" }}>Next Level</h1>
                <h1 className='fira' style={{ transform: `translateX( ${offsetY * -0.2}px)` }}>Next Level</h1>
                <h1 className='fira' style={{ transform: `translateX( ${offsetY * -0.2}px)`, right: "-150px" }}>Next Level</h1>
            </div>
        </>
    )
}

export default NextLevel