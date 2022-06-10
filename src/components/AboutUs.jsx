import React, { useState } from 'react'

const AboutUs = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <div id='aboutUs' className="aboutUs">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <div className="wrap">
                                <div className="design">Дизайн</div>
                                <div className="strategy">Стратегия</div>
                                <div className="km">400+ кв.м. производственной площади</div>
                                <div className="public">Публичные отношения</div>
                                <div className="third">30+ Квалифицированных сотрудников </div>
                                <div className="ten">10 лет опыта</div>
                                <div className="fifth">5000+ Реализованных  проектов  в год </div>
                                <div className="mid"><img src="/assets/image/aboutShape.png" alt="" /> <p>О  НАС</p></div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            {/* <h1>OOO "Next level"</h1> */}
                            <h2> OOO "Next level" Работающая под торговой маркой Деловой Город </h2>
                            <h3>Рекламно производственная компания</h3>
                            <h4>Next Level предлагает индивидуальные связи с общественностью и маркетинг, основанные на умном мышлении, понимании рынка и наборе деловой этики, которые гарантируют, что мы получим наилучшие результаты для наших клиентов. Для нас связи с общественностью — это не умирающее искусство, это навык, который живёт наряду с социальным, цифровым и традиционным маркетингом.</h4>
                            <h5>Мы команда страстных профессионалов по связям со СМИ, писателей, цифровых маркетологов и креативных дизайнеров. Наши клиенты большие и малые и международные, работающие в самых разных секторах.</h5>
                            <button onClick={() => setModal(true)} className='btn  myBtn'>Узнать больше</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`myModal ${modal ? 'active' : ''}`}>
                <div className="cards">
                    <span onClick={() => setModal(false)}>x</span>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque ad sit incidunt dicta dolores quasi, eum ex fugiat quaerat distinctio, dolore, modi temporibus vel itaque? Delectus deleniti molestiae explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque ad sit incidunt dicta dolores quasi, eum ex fugiat quaerat distinctio, dolore, modi temporibus vel itaque? Delectus deleniti molestiae explicabo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque ad sit incidunt dicta dolores quasi, eum ex fugiat quaerat distinctio, dolore, modi temporibus vel itaque? Delectus deleniti molestiae explicabo.</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs