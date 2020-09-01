const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

// API Test
app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
