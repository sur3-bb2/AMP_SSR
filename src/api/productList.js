import fetch from 'isomorphic-fetch';

import parseProductList from '../transform/productList';

const getRelatedProducts = url => {
  return fetch(url)
      .then(res => res.json())
      .then(res => parseProductList(res));
}

export default getRelatedProducts;