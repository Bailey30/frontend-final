import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Basket from "./pages/Basket"
import UploadImageTest from "./pages/UploadImageTest";
import ProductPage from "./pages/ProductPage";
import LoginSuccess from "./pages/LoginSuccess";
import RegisterSuccess from "./pages/RegisterSuccess";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/basket" element={<Basket/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/uploadimage" element={<UploadImageTest/>}></Route>

        <Route path="/productpage" element={<ProductPage/>}></Route>
        <Route path="/loginsuccess" element={<LoginSuccess/>}></Route>
        <Route path="/registersuccess" element={<RegisterSuccess/>}></Route>
        {/* <Route path="/basket" element={<Basket/>}></Route> */}


        <Route path="/about" element={<About/>}></Route>
  
      </Routes>

    </Router>
  );
}

export default App;
