import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";

const SectionCheckout = () => {
  return (
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
  );
};

const ReturningCustomer = () => {
  return (
    <div
      className="returning_customer d-flex flex-column border overflow-hidden mb-5"
      style={{ gap: "15px", borderRadius: "10px" }}
    >
			<Accordion defaultActiveKey="none">
				<Card>
					<Card.Header>
						<span>Returning Customer?</span>
						<Accordion.Toggle variant="link" eventKey="0" className="link" style={{border:'none', backgroundColor: 'transparent'}}>
								Click here to login
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<form
								className="row contact_form"
								action="#"
								method="post"
								noValidate="novalidate"
							>
								<div className="col-md-6 form-group p_star">
									<label htmlFor="name" className="form-label">
										Name
									</label>
									<input
										type="text"
										className="form-control"
										id="name"
										name="name"
										placeholder="Name"
									/>
								</div>
								<div className="col-md-6 form-group p_star">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control"
										id="password"
										name="password"
										placeholder="Password"
									/>
								</div>
								
								<div className="col-md-6 form-group p_star">
									<button className="btn btn-primary">Login</button>
								</div>
							</form>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
    </div>
  );
};

const MyOrderList = () => {

	const totalOrderPrice = () => {
		return orders.reduce((total, order) => total + order.price, 0);
	}

	const orders = [
		{
			course_id: 1,
			course_name: "Cyber Security",
			price: 8,
		},
		{
			course_id: 2,
			course_name: "Bussines Intelligence",
			price: 10,
		},
		{
			course_id: 3,
			course_name: "Digital Marketing",
			price: 6,
		}
	]

	const paymentMethods = [
		{
			id: 1,
			paymentMethod: 'Debit/Credit',
		},
		{
			id: 2,
			paymentMethod: 'E-Wallet',
		},
		{
			id: 3,
			paymentMethod: 'Bank Transfer',
		},
		{
			id: 4,
			paymentMethod: 'Virtual Account',
		}
	]

	function handleCheckout() {
		// console.log('Checkout')
		alert('Checkout')
	}

	return (
		<div className="order_box">
			<h2>Your Order</h2>
			<ul className="list">
				<li>
					<Link to="#" style={{cursor: "default", textDecoration: "none", fontWeight: "bolder"}}>
						Product
						<span>Total</span>
					</Link>
				</li>
				{orders.map((order) => (
					<li key={order.course_id}>
						<Link to="#">
							{order.course_name}
							<span>${order.price}</span>
						</Link>
					</li>
				))}
			</ul>

			<ul className="list list_2">
				<li>
					<Link 
						to="#" 
						style={{
							cursor: "default", 
							textDecoration: "none", 
							fontWeight: "bolder"
						}}>
						Total
						<span>$ {totalOrderPrice()}</span>
					</Link>
				</li>
			</ul>

			<ul className="list list_2">
				<li>
					<Link 
						to="#" 
						style={{
							cursor: "default", 
							textDecoration: "none", 
							fontWeight: "bolder"
						}}> 
						PAYMENT
					</Link>
				</li>
			</ul>
			{paymentMethods.map((item,index) => (
				<div key={item.id} className="payment_methode">
					<div className="radion_btn">
						<input type="radio" id={`f-option15-${index}`} name="payment_method" />
						<label htmlFor={`f-option15-${index}`}> {item.paymentMethod} </label>
						<div className="check" />
					</div>
				</div>
			))}
			<button className="btn_3 w-100" onClick={handleCheckout}>
				Proceed to Paypal
			</button>
		</div>
	)
}

const ProccesCheckout = () => {
  return (
    <>
      <section className="checkout_area section_padding">
        <div className="container">
					<ReturningCustomer />
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form
                  className="row contact_form"
                  action="#"
                  method="post"
                  noValidate="novalidate"
                >
                  <div className="col-md-6 form-group p_star">
										<label htmlFor="first" className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      name="firstname"
											placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
									<label htmlFor="last" className="form-label">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      name="lastname"
											placeholder="Last name"
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
									<label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
											placeholder="Email"
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
										<label htmlFor="country" className="form-label">Country</label>
                    <select className="form-select form-control country_select" placeholder="Country">
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
								<MyOrderList/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <SectionCheckout />
      <ProccesCheckout />
    </>
  );
};

export default CheckoutPage;
