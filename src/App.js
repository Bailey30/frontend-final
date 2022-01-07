import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Basket from "./pages/Basket"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/login" element={<Login/>}></Route> */}
        <Route path="/basket" element={<Basket/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
        {/* <Route path="/basket" */}
      </Routes>

    </Router>
  );
}

export default App;
