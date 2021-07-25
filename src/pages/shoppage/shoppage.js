import React, { useEffect } from 'react';
import CollectionOverview from '../../components/collectionOverview/collectionOverview';
import { Route } from 'react-router';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    } ,[])
    console.log(match.path)
    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}
export default ShopPage;