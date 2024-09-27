import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import ScrollToTop from "./components/ScrollToTop";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ScrollToTop />
          <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <App />
          </GoogleOAuthProvider>
          ;
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
