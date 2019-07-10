import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';
import HighlightSection from './HighlightSection';

const ProductDetailSection = props => {
    const { image, price, title, promo, bullets, buy_url, ratingClass } = props;

    return (
        <div>
            <amp-img src={image} alt="Welcome" height="350" width="350"></amp-img>
            <div className="price">{price}</div>
            <div dangerouslySetInnerHTML={{__html: title}} className="details-title" />
            <div className="textRed promo">
                <div className="promo-container">{promo}</div>
            </div>
            <Rating ratingClass={ratingClass} />
            <HighlightSection bullets={bullets} />
            <button className="product-atc full-width btn btn-primary">add to cart</button>
            <a className="product-view-details btn full-width btn-default" href={buy_url}>
                view full item details
            </a>
        </div>
    );
}

ProductDetailSection.propTypes = {
    image: PropTypes.string,
    price: PropTypes.string,
    title: PropTypes.string,
    promo: PropTypes.string,
    bullets: PropTypes.array,
    buy_url: PropTypes.string,
    ratingClass: PropTypes.string
}

export default ProductDetailSection;