const router = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const { validateCardBody, validateId } = require("../middlewares/validation");

router.get("/", getItems);
router.post("/", validateCardBody, createItem);
router.delete("/:itemId/likes", validateId, dislikeItem);
router.put("/:itemId/likes", validateId, likeItem);
router.delete("/:itemId", validateId, deleteItem);

module.exports = router;
