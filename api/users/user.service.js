const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "INSERT INTO users(email, password) values(?,?)",
      [data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query("SELECT id,email FROM users", [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      "SELECT id,email FROM users WHERE id=?",
      [id],
      (error, results, field) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      "UPDATE users SET email=?, password=? WHERE id=?",
      [data.email, data.password, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      "DELETE FROM users WHERE id=?",
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      "SELECT * FROM users WHERE email=?",
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
