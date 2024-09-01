// PopularItemsList.js
import React, { useContext, useEffect, useState } from 'react';
import PopularItem from './PopularItem';
import axios from '../../api/axios';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal2 = withReactContent(Swal)

const PopularItemsList = ({ items }) => {
    const { auth } = useContext(AuthContext)

    const [allCart, setAllCart] = useState([]);

    const addToCart = async (courseID) => {
        const course = items.find((i) => i.id === courseID)

		try {
			await axios.post('/cart/create-cart', {
				course_id: course.id,
				user_id: parseInt(auth.userID),
				course_name: course.title,
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
    
    const removeFromCart = async (courseID) => {
        try {
			await axios.delete(`/cart/delete-cart/${courseID}`, {});

			fetchAllCart()
				
			Swal2.fire({
				icon: "success",
				title: "Berhasil dihapus dari cart",
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
				title: "Gagal menghapus dari keranjang",
				customClass: {
				confirmButton: "btn btn-success"
				},
				buttonsStyling: false
			})
		}
    }

    const removeFromWishlist = async (courseID) => {
        try {
			await axios.delete(`/wishlist/delete-wishlist/${courseID}`, {});
				
			Swal2.fire({
				icon: "success",
				title: "Berhasil dihapus dari wishlist",
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
				title: "Gagal menghapus dari wishlist",
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

    useEffect(() => {
        fetchAllCart()
    }, [])

    return (
        <div className='container py-5 popular-items'>
            <div className="row">
                {items.map((item, index) => (
                    <div className='col-md-4'>
                        <PopularItem
                            key={index}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            url={item.url}
                            courseID={item.id}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                            isInCart={allCart.some(item2 => item2.course_id === item.id)}
                            removeFromWishlist={removeFromWishlist}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularItemsList;
