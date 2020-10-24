import React from "react";
import ReactDOM from "react-dom";
import Home from "../client/Home.jsx";

ReactDOM.hydrate(
    <Home name={window.__INITIAL__DATA__.name} />,
    document.getElementById("root")
);