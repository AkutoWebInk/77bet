import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthProvider";
import WarningProvider from "./context/WarningProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WarningProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </WarningProvider>
);
