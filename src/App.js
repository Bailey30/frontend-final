import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route to="/" element={<Home/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
