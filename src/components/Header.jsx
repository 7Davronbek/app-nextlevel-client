import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h6>Универсальная платформа для открытия лучшего</h6>
              <h1>Рекламно производственная компания </h1>
              <h2>Ищете рекламное Агенство?</h2>
              {/* <h3>Explore the world’s leading local and global agencies to find the one that suits your needs.</h3> */}
              <button className="btn myBtn">Подробнее</button>
            </div>
          </div>
        </div>
      </div>

      <div className="nextLevel">NEXT LEVEL</div>
    </>
  )
}

export default Header