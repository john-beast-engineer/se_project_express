const router = require("express").Router();
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:itemId/likes", dislikeItem);
router.put("/:itemId/likes", likeItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
