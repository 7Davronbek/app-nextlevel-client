import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className='Product'>
            <div id='service' className="gridLayout">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto text-center">
                            <h1 className='medium'>Продукция и услуги</h1>
                        </div>
                        <div className="col-lg-11 mx-auto text-center">

                            <div className="image-gallary">
                                <Link to='/productions/id' className="image-box">
                                    <img src={`/assets/image/port1.jpg`} alt="" />
                                    <h6 className="fira">Торговое оборудование</h6>
                                </Link>
                                <div className="image-box">
                                    <img src={`/assets/image/port2.jpg`} alt="" />
                                    <h6 className="fira">POSM</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port3.webp`} alt="" />
                                    <h6 className="fira">Офисная мебель</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port4.webp`} alt="" />
                                    <h6 className="fira">Вывески</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port5.jpg`} alt="" />
                                    <h6 className="fira">Интерьерное оформление</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port6.webp`} alt="" />
                                    <h6 className="fira">Световые короба</h6>
                                </div>


                                <div className="image-box">
                                    <img src={`/assets/image/port7.jpg`} alt="" />
                                    <h6 className="fira">Изготовление и застройка выставочных стендов</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port8.jpg`} alt="" />
                                    <h6 className="fira">Крышные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port9.jpg`} alt="" />
                                    <h6 className="fira">Стелы, пилоны, указатели, навигационные материалы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port8.jpg`} alt="" />
                                    <h6 className="fira">Крышные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port14.jpg`} alt="" />
                                    <h6 className="fira">Остановочные комплексы </h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port11.webp`} alt="" />
                                    <h6 className="fira">Oснованные комплексы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port10.jpg`} alt="" />
                                    <h6 className="fira">Маркетирование</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port12.webp`} alt="" />
                                    <h6 className="fira">Архитектурная подсветка</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port13.webp`} alt="" />
                                    <h6 className="fira">Сувенирная продукция</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port15.jpg`} alt="" />
                                    <h6 className="fira"> Арт-объекты и нестандартные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port17.jpg`} alt="" />
                                    <h6 className="fira"> Оформление фасадод и входных групп</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port16.jpg`} alt="" />
                                    <h6 className="fira">Декорирование автотранспорта и витражей</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port18.jpg`} alt="" />
                                    <h6 className="fira">Таблички и информационные стенды</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port19.jpg`} alt="" />
                                    <h6 className="fira">Флагштоки, флаги и печать на ткани</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/port20.jpg`} alt="" />
                                    <h6 className="fira">Баннерные паччо и растяжки</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product