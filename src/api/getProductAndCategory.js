import _ from 'lodash';

import endpoint from '../config';
import getProductDetails from './product';
import getRelatedProducts from './productList';
import errors from '../error';

const getPdpUrl = tcin => {
    const excludes = '?excludes=taxonomy,bundle_components,question_answer_statistics,deep_red_labels,rating_and_review_reviews';

    return `${endpoint.host}${endpoint.pdpPath}${tcin}${excludes}`;
}

const getCategoryUrl = category => {
    const excludes = '&excludes=search_recommendations';

    return `${endpoint.host}${endpoint.plpPath}?count=3&offset=0&category=${category}${excludes}`;
}

const getProductAndCategoryDetails = tcin => {
    return getProductDetails(getPdpUrl(tcin))
        .then(productDetails => {
            if(productDetails == null || !_.has(productDetails, 'categoryNode')) return Promise.reject(errors.itemNotFound)

            return Promise.all([productDetails, getRelatedProducts(getCategoryUrl(productDetails.categoryNode))]);
        })
        .then(results => {
            return {productDetails: results[0], relatedProducts: results[1]};
        });
}

export default getProductAndCategoryDetails;