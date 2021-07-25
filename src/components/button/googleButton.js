import React from 'react';
import './googleButton.scss';

const GoogleButton = ({ children, ...otherProps }) => {
    return(
        <button className='btn-gradg' {...otherProps}>
            {children}
        </button>
    )
}

export default GoogleButton;