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
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/list-posting" element={<ListPosting />} />
        <Route path="/edit" element={<EditPost />} />
        <Route path="/detail/:id_post" element={<PageComent />} />
        <Route path="*" element={<div>404 Error Masse</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
