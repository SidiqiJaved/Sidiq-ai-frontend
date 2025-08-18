import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { Contact } from "@/pages/Contact";
import { FigmaDev } from "@/pages/FigmaDev";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Home />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
