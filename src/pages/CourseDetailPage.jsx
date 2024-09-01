import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import axios from "../api/axios";
import DetailComponent from "../components/DetailComponent";
import Swal2 from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const CourseDetailPage = () => {
	const params = useParams();
	const [course, setCourse] = useState([]);
	const [allCart, setAllCart] = useState([]);
	const [allWishlist, setAllWishlist] = useState([]);
	const { auth, destroyAuth } = useContext(AuthContext)

	const fetchDataPopular = async () => {
		try {
			const response = await axios.get("/public/get-course/" + params.id);
			setCourse(response.data.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};


	
	const addToCart = async () => {
		try {
			await axios.post('/cart/create-cart', {
				course_id: course.course_id,
				user_id: parseInt(auth.userID),
				course_name: course.course_name,
				quantity: 1,
				price: course.price,
				total_amount: course.price,
			});

			fetchAllCart()
				
			Swal2.fire({
				icon: "success",
				title: "Berhasil ditambahkan",
				customClass: {
				confirmButton: "btn btn-success",
				cancelButton: "btn btn-danger"
				},
				buttonsStyling: false
			})
		} catch (error) {
			console.error('Error fetching data:', error);
			Swal2.fire({
				icon: "error",
				title: "Gagal menambahkan ke keranjang",
				customClass: {
				confirmButton: "btn btn-success"
				},
				buttonsStyling: false
			})
		}
	}

	const fetchAllCart = async () => {
		try {
			const response = await axios.get('/cart/getall-cart');
			console.log("allcart", response.data)

			if(response.data.data === null) {
				setAllCart([])
			} else {
				setAllCart(response.data.data)
			}
		} catch (error) {
			console.error('Error fetching data:', error);
			console.log("allcart", allCart)
		}
	}

	const fetchAllWishList = async () => {
		try {
			const response = await axios.get('/wishlist/wishlist');
			console.log("allwishlist", response.data)

			if(response.data.data === null) {
				setAllWishlist([])
			} else {
				setAllWishlist(response.data.data)
			}
		} catch (error) {
			console.error('Error fetching data:', error);
			console.log("allcart", allCart)
		}
	}

	const addToWishList = async () => {
		console.log("PLPL")

		try {
			await axios.post('/wishlist/create-wishlist', {
				course_id: course.course_id,
				user_id: parseInt(auth.userID),
				course_name: course.course_name,
				quantity: 1,
				price: course.price,
				total_amount: course.price,
			});

			fetchAllWishList()

			Swal2.fire({
				icon: "success",
				title: "Berhasil ditambahkan",
				customClass: {
					confirmButton: "btn btn-success",
					cancelButton: "btn btn-danger"
				},
				buttonsStyling: false
			})

		} catch (error) {
			console.error('Error fetching data:', error);

			Swal2.fire({
				icon: "error",
				title: "Gagal menambahkan ke wishlist",
				customClass: {
					confirmButton: "btn btn-success"
				},
				buttonsStyling: false
			})
		}
	}

  useEffect(() => {
    fetchDataPopular();
	fetchAllCart();
	fetchAllWishList();
  }, []);
  return (
    <>
      <PageTitle title={course.course_name} />
      <DetailComponent
        url={course.url}
        title={course.course_name}
        description={course.course_description}
        price={course.price}
		addToCart={addToCart}
		isInCart={allCart.some(item => item.course_id === course.course_id)}
		isLoggedIn={auth.userID ? true : false}
		addToWishlist={addToWishList}
		isInWishlist={allWishlist.some(item => {
			return item.course_id === course.course_id
		})}
      />
    </>
  );
};

export default CourseDetailPage;
