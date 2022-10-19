import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages";
import CreatePost from "pages/CreatePost";
import Login from "pages/Login";
import Register from "pages/Register";
import EditProfile from "pages/EditProfile";
import ListPosting from "pages/ListPosting";
import EditPost from "pages/EditPost";
import PageComent from "pages/PageComent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/listposting" element={<ListPosting />} />
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/Detail/:id_post" element={<PageComent />} />
        {/* <Route path="/Carrousel" element={<Carrousel />} /> */}
        <Route path="*" element={<div>404 Error Masse</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
