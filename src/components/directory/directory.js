import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelector';
import './directory.scss'
import MenuItem from '../menu-item/menuItem';


const Directory = ({ sections }) => {
  return(
    <div className='directory-menu'>
      {
        sections.map( ({ title, imageUrl, id, size, linkUrl })  =>  {
            return(
              <MenuItem 
                title={title} 
                key={id} 
                url={imageUrl} 
                size={size}
                linkUrl={linkUrl}
                />
                );
              })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);