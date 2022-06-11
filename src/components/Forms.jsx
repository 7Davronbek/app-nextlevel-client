import React from 'react'

const Forms = () => {
    return (
        <>
            <div id='forms' className="forms">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='boldta text-center'>Связаться с Нами</h1>
                        </div>
                        <div className="col-lg-10 mx-auto">
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
                                <div className="col-lg-4 ms-auto text-end">
                                    <div className="myBtn">Отправить</div>
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