import React from "react";
import ReactDOM from "react-dom";
import Home from "../client/Home.jsx";

ReactDOM.hydrate(
    <Home />,
    document.getElementById("root")
);