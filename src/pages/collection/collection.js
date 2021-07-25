import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collectionItem/collectionItem';
import { selectCollection } from '../../redux/shop/shopSelector';
import './collection.scss'

const CollectionPage = ({ collection }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    } ,[])
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title' >{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);