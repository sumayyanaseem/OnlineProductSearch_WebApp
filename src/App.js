import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

import HomeScreen from './property-app/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/tuiter/*"
          element={<HomeScreen />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
