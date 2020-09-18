const mongoose = require('mongoose');
const connection = "mongodb+srv://user:userpass@cluster0.z7utu.mongodb.net/googlebooks?retryWrites=true&w=majority"

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));