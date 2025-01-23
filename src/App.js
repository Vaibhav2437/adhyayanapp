import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar.jsx';
import Home from '../src/Component/Pages/Home.jsx'
import About from './Component/Pages/About.jsx';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
