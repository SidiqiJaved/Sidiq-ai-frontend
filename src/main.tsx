import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Client-side entry point
if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    if (rootElement.hasChildNodes()) {
      ReactDOM.hydrateRoot(
        rootElement,
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    } else {
      ReactDOM.createRoot(rootElement).render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    }
  }
}
