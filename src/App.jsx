import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import './index.css';
import {Register} from "./pages/Register.jsx";
import {Login} from "./pages/Login.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path= "/register" element={<Register/>}/>
              <Route path= "/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
