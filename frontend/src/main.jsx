import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import AboutUS from "./Components/AboutUS/AboutUS.jsx";
import Home from "./Components/Home/Home.jsx";
import Liked from "./Components/Liked/Liked.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Login from "./Components/LoginSignup/Login.jsx";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- Add this! 🚨
import 'bootstrap/dist/js/bootstrap.bundle.min'; // <--- Add this for the toggle to work!
=======
import Signup from "./Components/LoginSignup/Signup.jsx";

>>>>>>> 0443b5695d9153c1005188fcc40464e553c00d26

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

<<<<<<< HEAD
      <Route path="/" element={<Home />}>
=======
      <Route path="/home" element={<Home />}>

>>>>>>> 0443b5695d9153c1005188fcc40464e553c00d26
        <Route path="cart" element={ <Cart/> } />
        <Route path="liked" element={ <Liked/> } />
      </Route>

      <Route path="/aboutus" element={<AboutUS />} />

      <Route path="/login" element={<Login/>} />
<<<<<<< HEAD

=======
      <Route path="/" element={<Signup/>} />
>>>>>>> 0443b5695d9153c1005188fcc40464e553c00d26
    </Routes>
  </BrowserRouter>
);
