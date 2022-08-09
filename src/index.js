import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound"
import About from './components/About';
import Tools from './components/Tools';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/tools" element={<Tools />}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>);