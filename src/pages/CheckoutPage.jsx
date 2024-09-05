import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Button, Card } from "react-bootstrap";
import axios from "../api/axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Sweetalert = withReactContent(Swal)

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
	const [selectedPayment, setSelectedPayment] = useState(0)

	const [orders, setOrders] = useState([])
	const [paymentMethods, setPaymentMethods] = useState([])
    const [subTotal, setSubTotal] = useState("0")

    const fetchCartItems = async () => {
        try {
            const response = await axios.get("/cart/cartpage")

            setOrders(response.data.data)

            setSubTotal(response.data.data.reduce((acc, item) => acc + item.total_amount, 0))
            console.log(subTotal)
        } catch (e) {
            console.error(e)
        }
    }

	const fetchPaymentMethods = async () => {
		try {
			const response = await axios.get("/payment-method/get-paymentmethod", { withCredentials: true })

			setPaymentMethods(response.data.data)
		} catch (e) {
			console.error(e)
		}
	}

    useEffect(() => {
        fetchCartItems()
		fetchPaymentMethods()
    }, [])

	async function handleCheckout() {
		// Handle checkout
		// Create the payment
		await axios.post("/payment/create-payment", {
			payment_method_id: parseInt(selectedPayment)
		}, { withCredentials: true })

		// Create the subscriptions
		await axios.post("/subscription/create-subscription", {}, { withCredentials: true })

		Sweetalert.fire({
			icon: "success",
			title: "Pembelian berhasil",
			text: "Selamat belajar!",
			customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger"
			},
			buttonsStyling: false
		})
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
						<Link to={`/course/${order.course_id}`}>
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
						<span>$ {subTotal}</span>
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
			{paymentMethods.map((item) => (
				<div key={item.payment_method_id} className="payment_methode">
					<div className="radion_btn">
						<input type="radio" id={`f-option15-${item.payment_method_id}`} name="payment_method" value={item.payment_method_id} checked={item.payment_method_id == selectedPayment} onChange={(e) => setSelectedPayment(e.target.value)} />
						<label htmlFor={`f-option15-${item.payment_method_id}`}> {item.payment_method_name} </label>
						<div className="check" />
					</div>
				</div>
			))}
			<button className="btn_3 w-100" onClick={handleCheckout} disabled={selectedPayment == 0}>
				Order Course(s)
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
