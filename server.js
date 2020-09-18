const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
require('./database');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
}

mongoose.connection.on('connected', function () {
  console.log("Connected to mongodb")
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Add routes, both API and view
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// // Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static(path.join(__dirname, "client/build")));
//   // The "catchall" handler:  for any request that doesn't
//   // match one above, send back React's index.html file
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
