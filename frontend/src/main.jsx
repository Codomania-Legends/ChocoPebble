import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import AboutUS from "./Components/AboutUS/AboutUS.jsx";
import Home from "./Components/Home/Home.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/aboutus" element={<AboutUS />} />
      <Route path="/" element={<Home />}  />
    </Routes>
  </BrowserRouter>
);
