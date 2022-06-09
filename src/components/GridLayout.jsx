import React from 'react'

const GridLayout = () => {
    return (
        <>
            <div className="gridLayout">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1>Спектр производимой продукции и предоставляемых услуг:</h1>
                        </div>
                        <div className="col-11 mx-auto text-center">
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
                                    <h6 className="fira">Торговое оборудование</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">POSM</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Офисная мебель</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Вывески</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Интерьерное оформление</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Световые короба</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Изготовление и застройка выставочных стендов</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Крышные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Стелы, пилоны, указатели, навигационные материалы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Крышные конструкции</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Стелы, пиловы, указатели, указатели, навигационные материалы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">основанные комплексы</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Маркетирование</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Архитектурная подсветка</h6>
                                </div>
                                <div className="image-box">
                                    <img src={`/assets/image/card.jpeg`} alt="" />
                                    <h6 className="fira">Сувенирная продукция</h6>
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