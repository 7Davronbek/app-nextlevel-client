import React from 'react'
import GridLayout from './GridLayout'
import Order from './Order'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";

const ProductId = ({ modal, setModal }) => {
    return (
        <>
            <div className='ProductId'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h1 className="medium">Продукт</h1>
                            <div className="img">
                                <a href={`/assets/image/port1.jpg`} data-fancybox="gallery" ><img src="/assets/image/port1.jpg" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h2>Fringilla venenatis nisl vulputate.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit morbi at id nibh lectus velit nunc, cras. Senectus sem id sed tempus, sit semper. Nibh elementum, nunc amet rhoncus suspendisse facilisis vel quisque. Sapien id egestas in neque enim, elit. Integer massa at at eget at a euismod. Ut feugiat blandit at consequat placerat. Amet, ipsum in morbi felis placerat curabitur faucibus iaculis leo. Pellentesque mauris ut fames massa arcu adipiscing. Nunc nec nulla cursus tortor, odio tincidunt sodales. Ac feugiat blandit massa sit tristique pellentesque in. Adipiscing in id pellentesque consectetur mauris. Quis ut tellus netus.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex justify-content-end">
                                <div onClick={() => setModal(true)} className="btn myBtn">Заказать</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GridLayout />
            <Order />
        </>
    )
}

export default ProductId