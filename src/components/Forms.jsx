import React from 'react'

const Forms = () => {
    return (
        <>
            <div id='forms' className="forms">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <h1 className='boldta text-center'>Наш адрес</h1>
                        </div>
                        <div className="col-lg-4 mx-auto text-center">
                            <div className="row">
                                <div className="col-lg-12">

                                    <h3 className='regular'>Адрес</h3>
                                    <p>г. Ташкент, Юнус-Абадский р-н, ул. Бодомзор, проезд 1, д. 85.</p>

                                    <h3 className='myH3'>Телефон</h3>
                                    <p>
                                        <a href="tel: +998 78 129 70 70">+998 78 129 70 70</a>
                                    </p>
                                    <p>
                                        <a href="tel: +998 98 124 31 24">+998 98 124 31 24</a>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <div style={{height: "400px"}} className="map ">
                                <iframe
                                    className="map_karta"
                                    title="Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.014654079966!2d69.151491!3d41.286945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe333e071222b1f31!2zNDHCsDE3JzEzLjAiTiA2OcKwMDknMDUuNCJF!5e0!3m2!1sru!2s!4v1653649434628!5m2!1sru!2s"
                                    loading="lazy"
                                >
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="cards">
                                        <input type="text" className='form-control' placeholder='Ваше имя' />
                                        <span className='icon icon-form1'>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cards">
                                        <input type="text" className='form-control' placeholder='Ваш телефон' />
                                        <span className='icon icon-form2'>
                                        </span>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div className="cards">
                                        <input type="text" className='form-control' placeholder='Ваша почта' />
                                        <span className='icon icon-form3'>
                                        </span>
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="cards">
                                        <textarea rows={10} type="textarea" className='form-control' placeholder='Сообщение' />
                                        <span className='icon icon-form4'>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-7 ms-auto text-end">
                                    <div className="myBtn btn">Отправить</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forms