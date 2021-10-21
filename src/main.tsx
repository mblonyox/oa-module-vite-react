import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "oidc-react";
import App from "./App";
import RootLayout from "./layouts/RootLayout";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider
      authority="https://demo-account.kemenkeu.go.id"
      clientId="oa-local"
      redirectUri="http://localhost:4200"
      scope="openid profile"
      onSignIn={(user) => {
        window.location.href = import.meta.env.VITE_APP_BASEPATH;
      }}
    >
      <RootLayout>
        <App />
      </RootLayout>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
