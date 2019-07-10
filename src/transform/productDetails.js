import _ from 'lodash';

const getClassificationNodes = (item) => {
    const nodes = _.get(item, 'enrichment.sales_classification_nodes' , []);
    const minCategoryLength = 5;

    if(_.head(nodes).length >= minCategoryLength) return _.head(nodes);

    nodes.shift();

    return _.head(nodes);
};

const parseProductDetails = response => {
    if(response == null || !_.has(response, 'product')) return null;

    const product = _.get(response, 'product', {});
    const item = _.get(product, 'item', {});
    const images = _.get(item, 'enrichment.images', []);
    const classificationNodes = getClassificationNodes(item);
    const promoList = _.get(product, 'promotion.promotionList[0]', {});
    const reviewStatistics = _.get(product, 'rating_and_review_statistics.result');
    const reviewResult = _.get(reviewStatistics, item.tcin + '.coreStats');
    const average_rating = (_.get(reviewResult, 'AverageOverallRating', 0)  + '').replace('_', '.');
    const total_reviews = _.get(reviewResult, 'TotalReviewCount') || '0';
    const ratingClass = 'rating-score-' + _.round(average_rating);

    return {
        price : _.get(product, 'price.listPrice.formattedPrice', ''),
        title : _.get(item, 'product_description.title'),
        bullets : _.get(item, 'product_description.soft_bullets.bullets', []),
        buy_url : _.get(item, 'buy_url', ''),
        image : images[0].base_url + images[0].primary,
        categoryNode : classificationNodes.node_id,
        promo: promoList.appliedPromoText || 'promo not available',
        ratingClass,
        total_reviews
    }
}

export default parseProductDetails;