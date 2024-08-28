import React from 'react'

const SectionCart = () => {
	return (
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Cart List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SectionArea = () => {
    return(
        <>
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                        <div className="media">
                                        <div className="d-flex">
                                            <img src="assets/img/gallery/cyber.jpeg" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <p>
                                            Dasar-Dasar Keamanan Siber: Apa saja yang Perlu diKetahui?
                                            </p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5> $ 8 </h5>
                                    </td>
                                    <td>
                                        <div className="product_count">
                                        <span className="input-number-decrement">
                                            {" "}
                                            <i className="ti-minus" />
                                        </span>
                                        <input
                                            className="input-number"
                                            type="text"
                                            defaultValue={1}
                                            min={0}
                                            max={10}
                                        />
                                        <span className="input-number-increment">
                                            {" "}
                                            <i className="ti-plus" />
                                        </span>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>$ 8 </h5>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div className="media">
                                        <div className="d-flex">
                                            <img src="assets/img/gallery/html.jpeg" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <p>Tutorial HTML: Membuat Halaman Web Pertama Anda</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h5> $ 8 </h5>
                                    </td>
                                    <td>
                                        <div className="product_count">
                                        <span className="input-number-decrement">
                                            {" "}
                                            <i className="ti-minus" />
                                        </span>
                                        <input
                                            className="input-number"
                                            type="text"
                                            defaultValue={1}
                                            min={0}
                                            max={10}
                                        />
                                        <span className="input-number-increment">
                                            {" "}
                                            <i className="ti-plus" />
                                        </span>
                                        </div>
                                    </td>
                                    <td>
                                        <h5>$ 8</h5>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td />
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>$ 16</h5>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">
                                <a className="btn_1 checkout_btn_1" href="CheckoutPage">
                                    Proceed to checkout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const CartPage = () => {
	return (
		<>
			<SectionCart/>
            <SectionArea/>
		</>
	)
}

export default CartPage