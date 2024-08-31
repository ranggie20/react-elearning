import React, { useEffect, useState } from 'react';
import ComponentCart from '../layouts/components/ComponentCart';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const [cartItems, setCartItems] = useState([])
    const [subTotal, setSubTotal] = useState(0)

    const fetchCartItems = async () => {
        try {
            const response = await axios.get("http://localhost:3000/cart/cartpage", { withCredentials: true })

            setCartItems(response.data.data || [])

            setSubTotal(response.data.data.reduce((acc, item) => acc + item.total_amount, 0))
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchCartItems()
    }, [])

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
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <ComponentCart
                                            key={item.cart_id}
                                            image={item.thumbnail}
                                            title={item.course_name}
                                            price={item.price}
                                            total={item.total_amount}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td className='text-center' colSpan={3}>
                                            <i>Belum ada course yang dipilih, ayo kita belajar bersama!</i>
                                        </td>
                                    </tr>
                                ) }
                                <tr>
                                    <td />
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>$ {subTotal}</h5>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="checkout_btn_inner float-right">
                            { cartItems.length > 0 ? (
                                <Link className="btn_1 checkout_btn_1" to="/checkout">
                                    Proceed to checkout
                                </Link>
                            ) : null }
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
