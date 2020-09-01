const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.searchAll);
// .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.searchId)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
