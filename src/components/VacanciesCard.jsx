import React, { useState } from 'react'

const VacanciesCard = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div className='VacanciesCard'>
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h1 className="medium">Вакансии</h1>
                        </div>

                        <div className="col-lg-6">
                            <div className="cards">
                                <h2>Название должности</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                                <div className="d-flex justify-content-between">
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

                                <div className='d-flex align-items-center justify-content-center'>
                                    <div onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cards">
                                <h2>Название должности</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                                <div className="d-flex justify-content-between">
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

                                <div className='d-flex align-items-center justify-content-center'>
                                    <div onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cards">
                                <h2>Название должности</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                                <div className="d-flex justify-content-between">
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

                                <div className='d-flex align-items-center justify-content-center'>
                                    <div onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cards">
                                <h2>Название должности</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                                <div className="d-flex justify-content-between">
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

                                <div className='d-flex align-items-center justify-content-center'>
                                    <div onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cards">
                                <h2>Название должности</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                                <div className="d-flex justify-content-between">
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

                                <div className='d-flex align-items-center justify-content-center'>
                                    <div onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cards">
                                <h2>Название должности</h2>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in diam et consequat. Tellus dictum at lectus sodales nam rhoncus. Sed morbi sapien, ac purus vitae iaculis. Tincidunt dolor amet turpis nisl a ut tellus massa, vel. Nullam molestie ornare urna integer nibh massa non pretium.</h3>

                                <div className="d-flex justify-content-between">
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

                                <div className='d-flex align-items-center justify-content-center'>
                                    <div onClick={() => setModal(true)} className="btn myBtn">Оставить заявку</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`Order ${modal ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="cards">
                                <h1 className='medium'>Заполните обьявление</h1>
                                <input type="text" className="form-control" placeholder='Имя Фамилия' />
                                <input type="text" className="form-control" placeholder='Номер телефона' />
                                <input type="text" className="form-control" placeholder='Желаемая должность' />
                                <div className="d-flex align-items-center justify-content-center">
                                    <button className="btn myBtn">Отправить</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setModal(false)} className="back"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VacanciesCard