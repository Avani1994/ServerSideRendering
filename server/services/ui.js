const axios = require("axios");
const ReactDOMServer = require("react-dom/server");
const React = require("react");
import Home from "../../client/Home.jsx";

export const getComponent = async (req, res) => {
  const response = await axios.get(
    "https://5f72155164a3720016e61461.mockapi.io/api/v1/users/1"
  );
  const name = response.data.name;

  const component = ReactDOMServer.renderToString(<Home name={name}></Home>);

  const html = `
    <!doctype html>
      <html>
      <head>
      </head>
      <body>
      <div id="root">${component}</div>
      <script src="/public/home.js"></script>
    </body>
    </html>`;

  res.send(html);
};
