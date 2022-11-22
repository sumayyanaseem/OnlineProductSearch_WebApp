
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import HomeScreen from './property-app/HomeScreen';
import ProfileScreen from './property-app/ProfileScreen';


import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import userReducer from './property-app/user-reducer';
import ManageRequestScreen from './property-app/ManageRequestScreen';

const store = configureStore(
    {
      reducer:
      {
        user: userReducer
      }
});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/"
            element={<HomeScreen />} />

          <Route path="account"
            element={<ProfileScreen />} />
             <Route path="manage-requests"
            element={<ManageRequestScreen />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  </Provider>
  );
}


export default App;
