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
        <Route path="/" element={<Home user={user} setUser={setUser}/>}></Route>
        <Route path="/basket" element={<Basket user={user} setUser={setUser}/>}></Route>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
        <Route path="/uploadproduct" element={<UploadProduct user={user} setUser={setUser}/>}></Route>
        <Route path="/productpage" element={<ProductPage user={user} setUser={setUser}/>}></Route>
        <Route path="/loginsuccess" element={<LoginSuccess user={user} setUser={setUser}/>}></Route>
        <Route path="/registersuccess" element={<RegisterSuccess user={user} setUser={setUser}/>}></Route>
        {/* <Route path="/basket" element={<Basket/>}></Route> */}


        {/* <Route path="/about" element={<About/>}></Route> */}
  
      </Routes>

    </Router>
  );
}

export default App;
