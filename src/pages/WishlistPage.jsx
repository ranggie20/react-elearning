import React, { useEffect } from 'react';
import PopularItemsList from '../layouts/components/PopularItemsList';
import PageTitle from '../components/PageTitle';
import axios from '../api/axios';


const WishlistPage = () => {

    const fetchData = async function () {
        try {
            const response = await axios.get('/wishlist/whislist');
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const wishlistItems = [
        { image: 'assets/img/gallery/popular4.png', title: 'Google Analytics', price: 10, url: 'google_analytics_details.html' },
        { image: 'assets/img/gallery/popular5.png', title: 'Marketing Strategy', price: 16, url: 'strategi_mark_details.html' },
        { image: 'assets/img/gallery/popular6.png', title: 'Arduino', price: 18, url: 'microcontroller_details.html' }
    ];

    return (
        <>
            <PageTitle title={'Wishlist'}/>
            <PopularItemsList items={wishlistItems} />
        </>
    );
};

export default WishlistPage;
