const {
  create,
  getNoteById,
  getNotes,
  updateNote,
  deleteNote,
} = require("./notes.service");

module.exports = {
  createNote: (req, res) => {
    const body = req.body;

    if (!body.title || !body.content) {
      return res.status(400).json({
        success: 0,
        message: "Title and content are required",
      });
    }

    create(body, (err, results) => {
      if (err) {
        console.log("STATUS " + res.status);
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Connection error",
        });
      }
      return res.status(201).json({
        success: 1,
        data: results,
      });
    });
  },
  getNoteById: (req, res) => {
    const id = req.params.id;
    getNoteById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Note not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getNotes: (req, res) => {
    getNotes((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateNote: (req, res) => {
    const id = req.params.id;
    const data = req.body;

    updateNote(id, data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update note",
        });
      }
      return res.json({
        success: 1,
        message: "Successfully Updated",
      });
    });
  },
  deleteNote: (req, res) => {
    const id = req.params.id;
    deleteNote(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Note not Found",
        });
      }
      return res.status(204).json({
        success: 1,
        message: "Note Successfully Deleted",
      });
    });
  },
};
