import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages";
import CreatePost from "pages/CreatePost";
import Login from "pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404 Error Masse</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
