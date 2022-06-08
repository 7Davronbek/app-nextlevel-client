import React, { useState, useEffect } from 'react'

const Header = () => {

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6 style={{ transform: `translateY( ${offsetY * 0.25}px)` }}>Универсальная платформа для открытия лучшего</h6>
              <h1 style={{ transform: `translateY( ${offsetY * 0.25}px)` }}>Рекламно производственная компания </h1>
              <h2 style={{ transform: `translateY( ${offsetY * 0.35}px)` }}>Ищете рекламное Агенство?</h2>
              {/* <h3>Explore the world’s leading local and global agencies to find the one that suits your needs.</h3> */}
              <button style={{ transform: `translateY( ${offsetY * 0.4}px)` }} className="btn myBtn">Подробнее</button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ transform: `translateY( ${offsetY * 0.1}px) rotate(-90deg)` }}
        className="nextLevel">NEXT LEVEL</div>
    </>
  )
}

export default Header