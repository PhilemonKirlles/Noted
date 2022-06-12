// const express, app, routes, and port

const app = express();
const express = require("express");
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//parsing data array
app.use(express.urlencoded({ extended: true }));

//static file
app.use(express.static("public"));

//parsing data json
app.use(express.json());

//HTML routes and api route
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//Start listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}. Welcome!`);
});
