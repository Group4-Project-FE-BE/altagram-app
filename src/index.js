// import Login from "pages/Login";
import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import App from "routes";
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
