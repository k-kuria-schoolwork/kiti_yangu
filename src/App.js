import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Furnitures from './Components/Furnitures';
import Blog from './Components/Blog';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/furnitures' element={<Furnitures />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
