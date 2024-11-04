import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import "./styles/variables.css";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <AppRoutes />
  </BrowserRouter>
);
