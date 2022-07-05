import React from 'react'

const Order = () => {
    return (
        <div className='Order'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="cards">
                            <h1>Заказать</h1>
                            <input type="text" className="form-control" placeholder='Имя Фамилия' />
                            <input type="text" className="form-control" placeholder='Номер телефона' />
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn myBtn">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order