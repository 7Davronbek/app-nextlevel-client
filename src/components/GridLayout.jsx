import React from 'react'

const GridLayout = () => {
    return (
        <>
            <div className="gridLayout">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1>Спектр производимой продукции и предоставляемых услуг:</h1>
                        </div>
                        <div className="col-12 text-center">
                            {/* <div className="gallery">
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                                <div className="gallery-item"><img src="/assets/image/card.jpeg" alt="" /></div>
                            </div> */}

                            <div className="image-gallary">
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Торговое оборудование</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>POSM</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Офисная мебель</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Вывески</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Интерьерное оформление</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Световые короба</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Изготовление и застройка выставочных стендов</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Крышные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Стелы, пилоны, указатели, навигационные материалы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Крышные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Стелы, пиловы, указатели, указатели, навигационные материалы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>основанные комплексы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Маркетирование</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Архитектурная подсветка</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6>Сувенирная продукция</h6>
                                </div>
                            </div>

                            <div className="myBtn">Посмотреть все</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridLayout