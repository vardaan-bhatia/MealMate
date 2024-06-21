import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

// Render the app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
