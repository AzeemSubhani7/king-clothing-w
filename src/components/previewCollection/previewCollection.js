import React from 'react';
import CollectionItem from '../collectionItem/collectionItem';
import './previewCollection.scss'


const PreviewCollection = ({ title, items }) => {
    console.log(items)
    return(
        <div>
        <div className='collection-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => {
                    return(
                        <div>
                            <CollectionItem key={item.id} item={item} />
                        </div>
                    )
                })
            }
            </div>
        </div>

    </div>
    )
}

export default PreviewCollection;