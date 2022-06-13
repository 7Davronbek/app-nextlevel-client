import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {
    Autoplay,
    Navigation
} from "swiper";

const AgencyEvent = () => {
    return (
        <>
            <div className="agencyEvent">
                <div className="container">
                    <div className="row">
                        <div className="col-12 titles">
                            <h1 className='boldta mb-5'>Отзывы наших клиентов</h1>
                            {/* <h2 className="fira">what’s happening in the digital world</h2> */}
                            {/* <p>
                                Доброго дня! Уважаемый Партнер. Вас приветствует рекламно-производственная
                                компания ООО «NEXT LEVEL» работающая под торговой маркой «Деловой Город»!
                                «Деловой Город» С 2000 года создает актуальные проекты в наружной рекламе, которые делают
                                Узбекистан оптимальным пространством для развития бизнеса наших клиентов.
                                С первых шагов на рынке и по сей день ны осваиваем новые горизонты — внедряен инновации. реализуя
                                на стыке продуманных инженерных проектов и современных технологий в производстве
                                рекламы, Мы чтим традиции, но работаен на опережение, и обладаем компетенциями для решения самых
                                сложных маркетинговых задач клиента,
                                Нас выбирают зв богатый опыт, безупречную репутацию, стабильность, устойчивость, целенаправленный
                                подход к работе в котором главенствуют потребности заказчика и их качественное доплощение, а не
                                демонстрация наших возможностей. Надежность, сервис ( качество— постулаты, на которых построеч успех
                                «Делового Города».)

                                С каждым клиентом ны работаем согласно схеме, внутри которой цикл обработки и исполнения заказа
                                имеет формат четкого бизнес-процесса, не совместимого со стихийностью: тщательная обработка,
                                контроль на дсех этапах, собственная производственная база позволяют выполнять большие объемы
                                заказов качественно и точно в срок, Нан под силу работа в любом масштабе: если клиент нам поручает
                                воплощение проекта целиком, — мы работаем «с нуля и под ключ», если нужен «фрагмент» проекта, —
                                выполняем необходимую клиенту работу компонентно.
                                Для нас не существует невыполнимых задаче мы были и остаемся пионерами в сфере днедрения новых
                                технологий в создание и производство отечественной наружной рекламы. Самый сложный проект для нас
                                — это че проблема, а вызов нашин возможностям, которые могут быть ограничены только дашей
                                фантазией.
                                Важнейший актив «Делового Города» — команда профессионалов, специалистов своего дела, для
                                которых каждый новый заказ становится очередным этапом для роста и подтверждения их компетентности,
                                проверкой на прочность.
                                «Деловой Город» не достиг вершины своих возножностей потому, что каждый новый воплощенный
                                проект — это очередная ступень, преодоленчая на пути к решению еще более сложных задач,
                                Мы одинаково ответственно относимся к любому заказу — большому и маломуе простому и сложному,
                                Наш принцип — сделать сдое дело по высшему разряду, полностью отвечать ожиданиям клиента и всегда
                                оставаться довольными своей работой. Мы ценим заказчиков. дорожим партнерами. уважаем конкурентов,
                                И это взаимно.
                                «Деловой Город» — знак безупречного качества и гарантия отличной работы. Добро пожаловать! Наши
                                двери всегда открыты для вас.


                            </p> */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-9 mx-auto">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="wrap ">
                                                <div>
                                                    {/* <div className="myBtn">Social Media Events</div> */}
                                                    <h3 className='mt-5'>Media Park</h3>
                                                    {/* <div className="d-flex align-items-center justify-content-end mb-4">
                                                        <h6 className="fira">New York</h6>
                                                        <div className="i"></div>
                                                        <h6 className="fira">06 September, 2017</h6>
                                                    </div> */}
                                                    <p>Спасибо компанию Next level за хорошую выполненнную работу. Они самые лучшие</p>
                                                    {/* <a className='fira' href="!#">Read More</a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <img className='w-100' src="/assets/image/card.jpeg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgencyEvent