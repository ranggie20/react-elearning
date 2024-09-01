import React, { useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const PopularItem = ({
    image,
    title,
    price,
    url,
    courseID,
    isInCart,
    addToCart,
    removeFromCart,
    removeFromWishlist
}) => {
    const handleAddToCart = () => {
        if (isInCart) return;
        addToCart(courseID);
    }

    const handleRemoveFromCart = () => {
        if (!isInCart) return;
        removeFromCart(courseID);
    }
    
    const handleRemoveFromWishlist = () => {
        removeFromWishlist(courseID);
    }

    useEffect(() => {
        console.log(isInCart)
    }, [isInCart])

    return (
        <section className="popular-items latest-padding">
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                    <div className="single-popular-items mb-50 text-center">
                        <a>
                            <div className="popular-img">
                                <img src={image} alt={title} />
                                { isInCart ? (
                                    <div className="img-cap" onClick={handleRemoveFromCart}>
                                        <span>Remove from cart</span>
                                    </div>
                                ) : (
                                    <div className="img-cap" onClick={handleAddToCart}>
                                        <span>Add to cart</span>
                                    </div>
                                ) }
                                <a className="favorit-items" style={{ color: "red", cursor: "pointer" }} onClick={handleRemoveFromWishlist}>
                                    <FaHeart size={20}/>
                                </a>
                            </div>
                        </a>
                        <div className="popular-caption">
                            <h3>
                                <a href={url}>{title}</a>
                            </h3>
                            <span>${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularItem;
