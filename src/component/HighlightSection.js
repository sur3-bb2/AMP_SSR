import React from 'react';
import PropTypes from 'prop-types';

const HighlightSection = props => {
    const { title = 'highlights', bullets } = props;

    return (
        <div className="accordionCard h-standardSpacingTop">
            <h2 className="h-text-md">{title}</h2>
            <ul className="bullets-wrapper textGray ">{
                bullets && bullets.map(function (bullet, index) {
                    return (
                        <li key={index}>
                            {bullet}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
}

HighlightSection.propTypes = {
    bullets: PropTypes.array
}

export default HighlightSection;