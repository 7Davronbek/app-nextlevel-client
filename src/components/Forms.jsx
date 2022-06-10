import React from 'react'

const Forms = () => {
    return (
        <>
            <div className="forms">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='boldta text-center'>Связаться с Нами</h1>
                        </div>
                        <div className="col-lg-10 mx-auto">
                            <div className="row">  <div className="col-lg-4">
                                <div className="cards">
                                    <input type="text" className='form-control' placeholder='Ваше имя' />
                                </div>
                            </div>
                                <div className="col-lg-4">
                                    <div className="cards">
                                        <input type="text" className='form-control' placeholder='Ваш телефон' />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="cards">
                                        <input type="text" className='form-control' placeholder='Ваша почта' />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="cards">
                                        <input type="textarea" className='form-control' placeholder='Ваша почта' />
                                    </div>
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