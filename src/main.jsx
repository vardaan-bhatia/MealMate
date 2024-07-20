import React from "react";
import "regenerator-runtime/runtime";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import reduxstore from "./utils/reduxStore";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={reduxstore}>
        <AppRouter />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
