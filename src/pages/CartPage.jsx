import React from 'react';
import ComponentCart from '../layouts/components/ComponentCart';

const SectionCart = () => {
    return (
        <>
            <div className="slider-area">
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
    );
};

const SectionArea = () => {
    const cartItems = [
        {
            image: "assets/img/gallery/cyber.jpeg",
            title: "Dasar-Dasar Keamanan Siber: Apa saja yang Perlu diKetahui?",
            price: "$ 8",
            total: "$ 8"
        },
        {
            image: "assets/img/gallery/html.jpeg",
            title: "Tutorial HTML: Membuat Halaman Web Pertama Anda",
            price: "$ 8",
            total: "$ 8"
        },
        {
            image: "assets/img/gallery/html.jpeg",
            title: "Tutorial HTML: Membuat Halaman Web Pertama Anda",
            price: "$ 8",
            total: "$ 8"
        }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.total.slice(2)), 0);

    return (
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
                                {cartItems.map((item, index) => (
                                    <ComponentCart
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        total={item.total}
                                    />
                                ))}
                                <tr>
                                    <td />
                                    <td />
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>${subtotal}</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="checkout_btn_inner float-right">
                            <a className="btn_1 checkout_btn_1" href="/checkout">
                                Proceed to checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CartPage = () => {
    return (
        <>
            <SectionCart />
            <SectionArea />
        </>
    );
};

export default CartPage;
