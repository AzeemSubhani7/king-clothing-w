import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.scss'


// onClick={() => history.push(`${match.url}${linkUrl}`) }
const MenuItem = ({ title, url, size, history, linkUrl, match }) => {
    return(
        <div  
        className={`${size} menu-item`} 
        onClick={() => history.push(linkUrl)}
        >
            <div 
            className='background-image'
            style={{
                backgroundImage: `url(${url})`
            }}
            ></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);