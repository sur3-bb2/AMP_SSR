import fetch from 'isomorphic-fetch';

import parseProductDetails from '../transform/productDetails';

const getProductDetails = url => {
    return fetch(url)
        .then(res => res.json())
        .then(res => parseProductDetails(res));
}

export default getProductDetails;