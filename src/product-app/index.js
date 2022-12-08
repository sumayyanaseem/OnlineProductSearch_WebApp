import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getUserThunk } from '../services/user-thunks';
import AddProduct from './AddProduct';
import EditProfileComponent from './EditProfile';
import HomeScreen from './HomeScreen';
import Register from './LoginScreen/SignUpPage';
import ManageRequestScreen from './ManageRequestScreen';
import NavbarComponent from './NavbarComponent';
import ProductComponent from './ProductScreen/ProductComponent';
import ProfileScreen from './ProfileScreen';
import Login from './LoginScreen/LoginPage'

const ProductApplication = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            dispatch(getUserThunk())
        }
    }, [])

    return (
        <BrowserRouter>
            <div className="container">
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/edit-profile" element={<EditProfileComponent />} />
                    <Route path="/product/:pid" element={<ProductComponent />} />
                    <Route path="/account/*" element={<ProfileScreen />} />
                    <Route path="/manage-requests" element={<ManageRequestScreen />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products/add" element={<AddProduct />} />

                </Routes >

            </div>
        </BrowserRouter>)
}

export default ProductApplication;