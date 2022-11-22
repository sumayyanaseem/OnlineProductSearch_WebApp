import './App.css';
import LoginPage from "./property-app/LoginScreen/LoginPage";
import SignUpPage from "./property-app/LoginScreen/SignUpPage";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>

                </Routes>
            </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
