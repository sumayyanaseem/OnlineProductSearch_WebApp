import './App.css';
import LoginPage from "./product-app/LoginScreen/LoginPage";
import SignUpPage from "./product-app/LoginScreen/SignUpPage";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import HomeScreen from './product-app/HomeScreen';
import ProfileScreen from './product-app/ProfileScreen';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userReducer from './product-app/Reducers/user-reducer';
import propertyReducer from './product-app/HomeScreen/properties-reducer';
import ManageRequestScreen from './product-app/ManageRequestScreen';
import productReducer from "./product-app/Reducers/product-screen-reducer";
import ProductComponent from "./product-app/ProductScreen/ProductComponent";
import categoriesReducer from './product-app/Reducers/categories.reducer';

const store = configureStore(
    {
        reducer:
        {
            user: userReducer,
            properties: propertyReducer,
            products: productReducer,
            categories: categoriesReducer
        }
    });

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">

                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/product/:pid" element={<ProductComponent />} />
                        <Route path="/account" element={<ProfileScreen />} />
                        <Route path="/manage-requests" element={<ManageRequestScreen />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />

                    </Routes>

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
