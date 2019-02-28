import React from 'react';
import PropTypes from 'prop-types';
import './Product.css'

const Product = ({ imageSrc, price, name, description }) => {
    return (
        <div className="product-div">
            <div className="product-image">
                <img src={imageSrc}/>
            </div>
            <div className="product-description">
                <p>EUR {price}</p>
                <h2>Product name {name}</h2>
                <p>{description}</p>
            </div>
            <button className="add-button" >Add to Cart</button>
        </div>
    )
}

Product.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Product;