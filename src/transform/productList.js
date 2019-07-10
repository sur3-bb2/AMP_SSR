import _ from 'lodash';

const parseProductList = response => {
    if(response == null || !_.has(response, 'search_response.items.Item')) return null;

    const items = _.get(response, 'search_response.items.Item', []);
    const products = _.map(items, function (item) {
        const image = _.get(item, 'images[0]', {});
        return {
            title: _.get(item, 'title', ''),
            price: _.get(item, 'offer_price.formatted_price', ''),
            buy_url: 'https://www.target.com' + _.get(item, 'url', ''),
            image: image.base_url + image.primary,
            promo: _.get(item, 'promotion_messages[0]', 'promo not available')
        }
    });

    return products;
}

export default parseProductList;