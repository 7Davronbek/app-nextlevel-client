import React from 'react'

const GridLayout = () => {
    return (
        <>
            <div id='service' className="gridLayout">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1 className='boldta'>Спектр производимой продукции и предоставляемых услуг:</h1>
                        </div>
                        <div className="col-10 mx-auto text-center">
                            {/* <div className="gallery">
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/port" alt="" /></div>
                            </div> */}

                            <div className="image-gallary">
                                <div className="image-box">
                                    <img src={`/assets/image/port1.jpg`} alt="" />
                                    <h6 className="fira">Торговое оборудование</h6>
                                </div>
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
                                    <img src={`/assets/image/port9.jpg`} alt="" />
                                    <h6 className="fira">Стелы, пиловы, указатели, указатели, навигационные материалы</h6>
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
                            </div>

                            {/* <div className="myBtn">Посмотреть все</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridLayout