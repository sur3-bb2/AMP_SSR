import React from 'react';
import PropTypes from 'prop-types';

const Rating = props => {
    const offImgUrl = 'https://img3-secure.targetimg3.com/wcsstore/marketing/com/uimod/124-07262017-01/images/icons/star-rating-off.svg';
    const onImgUrl = 'https://img3-secure.targetimg3.com/wcsstore/marketing/com/uimod/124-07262017-01/images/icons/star-rating-on.svg';

    const { ratingClass } = props;

    return (
        <div className="rating-section">
            <div className="rating">
                <amp-img src={offImgUrl}
                         width="74" height="14"></amp-img>
                <div className={'rating-score ' + ratingClass}>
                    <amp-img src={onImgUrl}
                             width="74" height="14"></amp-img>
                </div>
            </div>
        </div>
    );
}

Rating.propTypes = {
    ratingClass: PropTypes.string
}

export default Rating;