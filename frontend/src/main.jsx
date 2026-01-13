import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import AboutUS from "./Components/AboutUS/AboutUS.jsx";
import Home from "./Components/Home/Home.jsx";
import Liked from "./Components/Liked/Liked.jsx";
import Cart from "./Components/Cart/Cart.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />}>

        <Route path="cart" element={ <Cart/> } />
        <Route path="liked" element={ <Liked/> } />

      </Route>

      <Route path="/aboutus" element={<AboutUS />} />
    </Routes>
  </BrowserRouter>
);
