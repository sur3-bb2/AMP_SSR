import React from 'react';
import PropTypes from 'prop-types';

const Products = props => {
    const {title = 'Suggested Products', products} = props;

    return (
        <div>
            <h2 className="text-align-center">{title}</h2>
            <ul className="products">
                {
                    products && products.map(function (product, index) {
                        return (
                            <li className="product-list" key={index}>
                                <div className="product-box">
                                    <div className="product-box-image">
                                        <amp-img src={product.image} alt="Welcome" height="150"
                                                 width="150"></amp-img>
                                    </div>
                                    <div className="product-box-description">
                                        <div className="price">
                                            {product.price}
                                        </div>
                                        <div className="details-title"
                                             dangerouslySetInnerHTML={{__html: product.title}}>
                                        </div>
                                        <div className="textRed promo">
                                            <div className="promo-container">{product.promo}</div>
                                        </div>
                                        <a className="btn-sm btn-primary" href={product.buy_url}>
                                            view details
                                        </a>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

Products.propTypes = {
    title: PropTypes.string,
    products: PropTypes.array
}

export default Products;