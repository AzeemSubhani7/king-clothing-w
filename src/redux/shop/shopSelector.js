import { createSelector } from "reselect";

const selectShop = state => state.shop;


export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionsUrlParam => 
    createSelector(
        [selectShopCollections],
        collections => collections[collectionsUrlParam]
    );

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collection => Object.keys(collection).map( key => collection[key])
)    