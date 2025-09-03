import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Solutions } from "@/pages/Solutions";
import { Contact } from "@/pages/Contact";
import { FigmaDev } from "@/pages/FigmaDev";
import "./index.css";

// Initialize theme from localStorage
if (typeof window !== 'undefined') {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

const rootElement = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/figma-dev" element={<FigmaDev />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
