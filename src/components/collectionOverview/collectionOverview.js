import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import PreviewCollection from '../previewCollection/previewCollection';
import './collectionOverview.scss'

function CollectionOverview({ collections }) {
    console.log(collections)
    return (
        <div className='collection-overview'>
        {
            collections.map( ({id, ...otherCollectionProps}) => {
                return(
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    )
            } )
        }
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);