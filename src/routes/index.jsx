import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages";
import CreatePost from "pages/CreatePost";
import Login from "pages/Login";
import EditPost from "pages/EditPost";
import PageComent from "pages/PageComent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/PageComent" element={<PageComent />} />
        {/* <Route path="/Carrousel" element={<Carrousel />} /> */}
        <Route path="*" element={<div>404 Error Masse</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
