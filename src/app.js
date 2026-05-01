const express = require("express");
const siteRoutes = require("./routes/siteRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.json());

app.use("/", siteRoutes);
app.use("/api", apiRoutes);

module.exports = app;
