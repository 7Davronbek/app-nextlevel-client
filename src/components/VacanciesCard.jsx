import React from 'react'

const VacanciesCard = () => {
    return (
        <div className='VacanciesCard'>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h1 className="medium">Вакансии</h1>
                    </div>

                    <div className="col-lg-5">
                        <div className="cards">
                            <h2>Название должности</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                            <div className="d-flex">
                                <div>
                                    <p>Dolor sit amet</p>
                                    <p>Tellus dictum at lectus</p>
                                    <p>Tincidunt dolor  </p>
                                </div>
                                <div>
                                    <p>Dolor sit amet</p>
                                    <p>Tellus dictum at lectus</p>
                                    <p>9:00 - 18:00   </p>    
                                </div>
                            </div>

                            <div className="btn myBtn">Оставить заявку</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VacanciesCard