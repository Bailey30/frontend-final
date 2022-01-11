import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import { TokenFetch } from "./requestMethods";
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Basket from "./pages/Basket"
import UploadProduct from "./pages/UploadProduct";
import ProductPage from "./pages/ProductPage";
import LoginSuccess from "./pages/LoginSuccess";
import RegisterSuccess from "./pages/RegisterSuccess";
import ProductDetails from "./pages/ProductDetails";
import FavoritesPage from "./pages/FavoritesPage";
import About from "./pages/About";



function App() {
  const [user, setUser] = useState({
    username: "",
    userId: "",
    email: ""
})

useEffect(() => {
  TokenFetch(setUser, user)
  // setLoggedIn(true)
}, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/basket" element={<ProductDetails/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/uploadimage" element={<UploadImageTest/>}></Route>
        <Route path="/favorites" element={<FavoritesPage/>}></Route>

        <Route path="/productpage" element={<ProductPage/>}></Route>
        <Route path="/loginsuccess" element={<LoginSuccess/>}></Route>
        <Route path="/registersuccess" element={<RegisterSuccess/>}></Route>
        <Route path="/" element={<Home user={user} setUser={setUser}/>}></Route>
        <Route path="/basket" element={<Basket user={user} setUser={setUser}/>}></Route>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
        <Route path="/uploadproduct" element={<UploadProduct user={user} setUser={setUser}/>}></Route>
        <Route path="/productpage/:category" element={<ProductPage user={user} setUser={setUser}/>}></Route>
        <Route path="/loginsuccess" element={<LoginSuccess user={user} setUser={setUser}/>}></Route>
        <Route path="/registersuccess" element={<RegisterSuccess user={user} setUser={setUser}/>}></Route>
        <Route path="/product/:id" element={<ProductDetails user={user} setUser={setUser}/>}></Route>
        {/* <Route path="/basket" element={<Basket/>}></Route> */}


        <Route path="/about" element={<About/>}></Route>
  
      </Routes>

    </Router>
  );
}

export default App;
