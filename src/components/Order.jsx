import React from 'react'

const Order = ({modal, setModal}) => {
    return (
        <div className={`Order ${modal ? 'active' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="cards">
                            <h1 className='medium'>Заказать</h1>
                            <input type="text" className="form-control" placeholder='Имя Фамилия' />
                            <input type="text" className="form-control" placeholder='Номер телефона' />
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn myBtn">Отправить</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setModal(false)} className="back"></div>
                </div>
            </div>
        </div>
    )
}

export default Order