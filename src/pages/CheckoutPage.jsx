import React from 'react'

const SectionCheckout=() => {
    return(
        <>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Checkout</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProccesCheckout=() => {
    return(
        <>
            <section className="checkout_area section_padding">
                <div className="container">
                    <div className="returning_customer">
                        <div className="check_title">
                            <h2>
                            Returning Customer?
                            <a href="login.html"> Click here to login</a>
                            </h2>
                        </div>
                        <form
                            className="row contact_form"
                            action="#"
                            method="post"
                            noValidate="novalidate">
                            <div className="col-md-6 form-group p_star">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                defaultValue=" "
                            />
                            <span className="placeholder" data-placeholder="Username or Email" />
                            </div>
                            <div className="col-md-6 form-group p_star">
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                defaultValue=""
                            />
                            <span className="placeholder" data-placeholder="Password" />
                            </div>
                        </form>
                    </div>
                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3>Billing Details</h3>
                                    <form
                                    className="row contact_form"
                                    action="#"
                                    method="post"
                                    noValidate="novalidate">
                                    <div className="col-md-6 form-group p_star">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="first"
                                        name="name"
                                    />
                                    <span className="placeholder" data-placeholder="First name" />
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="last"
                                        name="name"
                                    />
                                    <span className="placeholder" data-placeholder="Last name" />
                                </div>
                                <div className="col-md-6 form-group p_star">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="compemailany"
                                />
                                <span className="placeholder" data-placeholder="Email Address" />
                                </div>
                                <div className="col-md-12 form-group p_star">
                                <select className="country_select">
                                    <option value={1}> Indonesia </option>
                                    <option value={2}> Amerika Serikat </option>
                                    <option value={3}> Korea Selatan </option>
                                    <option value={4}> Japan </option>
                                    <option value={5}> Australia </option>
                                </select>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                        <div className="order_box">
                            <h2>Your Order</h2>
                            <ul className="list">
                            <li>
                                <Link to="#">
                                Product
                                <span>Total</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                Cyber Security
                                <span className="last">$ 8</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="*">
                                Bussines Image Management
                                <span className="last"> $ 8 </span>
                                </Link>
                            </li>
                            </ul>
                            <ul className="list list_2">
                            <li>
                                <Link to="*">
                                Total
                                <span>$ 16</span>
                                </Link>
                            </li>
                            </ul>
                            <ul className="list list_2">
                            <li>
                                <Link to="#"> PAYMENT </Link>
                            </li>
                            </ul>
                            <div className="payment_methode">
                            <div className="radion_btn">
                                <input type="radio" id="f-option15" name="selector" />
                                <label htmlFor="f-option15"> Debit/Credit </label>
                                <div className="check" />
                            </div>
                            </div>
                            <div className="payment_item">
                            <div className="radion_btn">
                                <input type="radio" id="f-option25" name="selector" />
                                <label htmlFor="f-option25"> E-Wallet </label>
                                <div className="check" />
                            </div>
                            </div>
                            <div className="payment_item">
                            <div className="radion_btn">
                                <input type="radio" id="f-option35" name="selector" />
                                <label htmlFor="f-option35"> Bank Transfer </label>
                                <div className="check" />
                            </div>
                            </div>
                            <div className="payment_item">
                            <div className="radion_btn">
                                <input type="radio" id="f-option45" name="selector" />
                                <label htmlFor="f-option45"> Virtual Account</label>
                                <div className="check" />
                            </div>
                            </div>
                            <Link className="btn_3" to="">
                                Proceed to Paypal
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const CheckoutPage=() => {
    return(
        <>
            <SectionCheckout/>
            <ProccesCheckout/>
        </>
    )
}

export default CheckoutPage