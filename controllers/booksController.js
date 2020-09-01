const db = require("../models/book");

module.exports = {
  searchAll: function(req, res) {
    let query = `https://www.googleapis.com/books/v1/volumes?q${req}`;

    axios({
      url: query,
      method: "GET",
    }).then((response) => {
      res.json(response);
      console.log(response);
    });
  },
  searchId: function(req, res) {
    let query = `https://www.googleapis.com/books/v1/volumes?q${req.params.id}`;

    axios({
      url: query,
      method: "GET",
    }).then((response) => {
      res.json(response);
      console.log(response);
    });
  },
};
