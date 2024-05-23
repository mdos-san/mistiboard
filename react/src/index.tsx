import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./features/SignInPage";
import CatsPage from "./features/CatsPage";
import CatDetailPage from "./features/CatDetailPage";
import RouterManager from "./features/RouterManager";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterManager />
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/cats/:catId" element={<CatDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
