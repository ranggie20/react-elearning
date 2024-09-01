import React, { useEffect, useState } from 'react';
import PopularItemsList from '../layouts/components/PopularItemsList';
import PageTitle from '../components/PageTitle';
import axios from '../api/axios';


const WishlistPage = () => {
    const [wishlistItems, setWishListItems] = useState([])

    const fetchData = async function () {
        try {
            const response = await axios.get('/wishlist/wishlist')
            
            setWishListItems(response.data.data.map((d) => ({
                id: d.course_id,
                image: `${import.meta.env.VITE_API_URL}/${d.course_photo}`,
                title: d.course_name,
                price: d.course_price,
                url: `/course/${d.course_id}`
            })) || [])
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <PageTitle title={'Wishlist'}/>
            <PopularItemsList items={wishlistItems} />
        </>
    );
};

export default WishlistPage;
