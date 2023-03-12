const express = require("express");
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
require("dotenv").config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config app

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log("Backend Nodejs is running on the port" + port);
});
