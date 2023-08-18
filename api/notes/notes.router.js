const {
  createNote,
  getNoteById,
  getNotes,
  updateNote,
  deleteNote,
} = require("./notes.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createNote);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", checkToken, updateNote);
router.delete("/:id", checkToken, deleteNote);
module.exports = router;
