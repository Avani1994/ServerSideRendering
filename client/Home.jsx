import React from "react";

const Home = (props) => (
    <React.Fragment>
        <div style={{ width: '300px', height: '300px', background: "green", padding: '5px' }} onClick={() => alert(`Hello ${props.name}`)}>
            <h1>Hello, {props.name}!</h1>
            <h4>Click here for alert</h4>
        </div>

    </React.Fragment>

);

export default Home;