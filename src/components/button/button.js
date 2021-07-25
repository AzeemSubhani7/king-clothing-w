import React from 'react';
import './button.scss';

const CustomButton = ({ children, ...otherProps }) => {
    return(
        <button className='btn-grad' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;