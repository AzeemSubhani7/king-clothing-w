import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"; // What we get is actuall local storage on window object
// import sessionStorage from "redux-persist/es/storage/session"; // we'l get the session storage
//Reducers
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";
// import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //This whitelist is an array, which reducers we want to save on local Storage
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)