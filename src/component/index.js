import React, { Component } from 'react';

import Header from './Header';
import ProductDetailSection from './ProductDetailSection';
import Products from './RelatedProducts';

export default class PLAContainer extends Component {
    constructor(props) {
        super(props);

        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart(e) {
        console.log('add to cart');
    }

    render() {
        const { productDetails, relatedProducts } = this.props;

        return (
            <div>
                <Header />
                <div className="product-wrapper">
                    <ProductDetailSection onAddToCart={this.onAddToCart} {...productDetails} />
                    <Products products={relatedProducts} />
                </div>
            </div>
        );
    }
}