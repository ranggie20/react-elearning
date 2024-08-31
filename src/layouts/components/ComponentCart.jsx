import React from 'react';

const ComponentCart = ({ image, title, price, total }) => {
    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src={image} alt="" />
                    </div>
                    <div className="media-body">
                        <p>{title}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>$ {price}</h5>
            </td>
            <td>
                <h5>$ {total}</h5>
            </td>
        </tr>
    );
};

export default ComponentCart;
