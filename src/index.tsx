import React from "react";
import ReactDOM from "react-dom/client";
import ShibirRegistration from "./components/ShibirRegistration/ShibirRegistration";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ShibirRegistration />
  </React.StrictMode>
);
