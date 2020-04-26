import React from 'react';
import PropTypes from 'prop-types'

const Button = ({addPage}) => {
    return (
<button className="Button" onClick={addPage}>Load More</button>
    );
    Button.propTypes = {
        addPage: PropTypes.func,
    }
};

export default Button;