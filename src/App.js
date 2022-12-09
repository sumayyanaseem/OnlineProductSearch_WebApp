import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userReducer from './product-app/Reducers/user-reducer';
import propertyReducer from './product-app/Reducers/properties-reducer';
import productReducer from "./product-app/Reducers/products-reducer";
import productByIdReducer from "./product-app/Reducers/product-screen-reducer";
import categoriesReducer from './product-app/Reducers/categories.reducer';
import productRequestsReducer from './product-app/Reducers/product-request-reducer.js'
import reviewsReducer from "./product-app/Reducers/reviews-reducer";
import productsByCategoryReducer from "./product-app/Reducers/product-category-reducer";
import ordersReducer from "./product-app/Reducers/orders-reducer";

import addressReducer from "./product-app/Reducers/address-reducer";
import ProductApplication from './product-app';


const store = configureStore(
    {
        reducer:
        {
            user: userReducer,
            properties: propertyReducer,
            products: productReducer,
            users: userReducer,
            categories: categoriesReducer,
            productRequests: productRequestsReducer,
            productById: productByIdReducer,
            productsByCategory: productsByCategoryReducer,
            reviews: reviewsReducer,
            userAddresses: addressReducer,
            orders: ordersReducer
        }
    });

function App() {
    return (
        <Provider store={store}>
            <ProductApplication />
        </Provider>
    );
}

export default App;
