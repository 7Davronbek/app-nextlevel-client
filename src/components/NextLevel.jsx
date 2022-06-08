import React, { useState, useEffect } from 'react'

const NextLevel = () => {

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div className="nextParralax">
                <h1 style={{ transform: `translateX( ${offsetY * 0.2}px)`,  left: "-150px" }}>Next Level</h1>
                <h1 style={{ transform: `translateX( ${offsetY * 0.2}px)` }}>Next Level</h1>
                <h1 style={{ transform: `translateX( ${offsetY * 0.2}px)`,  right: "-150px" }}>Next Level</h1>
            </div>
            <div className="nextParralax">
                <h1 style={{ transform: `translateX( ${offsetY * -0.2}px)` }}>Next Level</h1>
                <h1 style={{ transform: `translateX( ${offsetY * -0.2}px)` }}>Next Level</h1>
                <h1 style={{ transform: `translateX( ${offsetY * -0.2}px)` }}>Next Level</h1>
            </div>
        </>
    )
}

export default NextLevel