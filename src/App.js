import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PropertyComponent from "./property-app/PropertyScreen/PropertyComponent";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/property" element={<PropertyComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
