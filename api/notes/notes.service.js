const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO notes(title, content) values(?,?)",
      [data.title, data.content],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getNotes: (callBack) => {
    pool.query("SELECT * FROM notes", [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  getNoteById: (id, callBack) => {
    pool.query(
      "SELECT * FROM notes WHERE id=?",
      [id],
      (error, results, field) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateNote: (id, data, callBack) => {
    pool.query(
      "UPDATE notes SET title=?, content=? WHERE id=?",
      [data.title, data.content, id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteNote: (id, callBack) => {
    pool.query(
      "DELETE FROM notes WHERE id=?",
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
