import './App.css';
import Login from "./property-app/LoginScreen/LoginPage";
import Register from "./property-app/LoginScreen/SignUpPage";

import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import HomeScreen from './property-app/HomeScreen';
import ProfileScreen from './property-app/ProfileScreen';
import PropertyComponent from "./property-app/PropertyScreen/PropertyComponent";

import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import userReducer from './property-app/user-reducer';
import propertyReducer from './property-app/HomeScreen/properties-reducer';
import ManageRequestScreen from './property-app/ManageRequestScreen';

const store = configureStore(
    {
        reducer:
            {
                user: userReducer,
                properties:propertyReducer,
                users: userReducer,
            }
    });

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="/property/:pid" element={<PropertyComponent/>}/>
                        <Route path="/account" element={<ProfileScreen/>}/>
                        <Route path="/manage-requests" element={<ManageRequestScreen/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>

                    </Routes>

                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
