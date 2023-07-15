import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CarDetailContainer from './Pages/itemDetailcontainer';
import NavbarMain from './Components/Navigation';
import {WishlistCounterProvider} from './context/wishlistCounter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<WishlistCounterProvider>
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/categories" element={<App />}></Route> 
        <Route path="/categories/:id" element={<App />}></Route>
        <Route path="/inventory/:id" element={<CarDetailContainer />}></Route>
        {/*<Route path="/inventory/:id" element={<CarDetail />}></Route>*/}

      </Routes>
    </BrowserRouter>`
  </WishlistCounterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
