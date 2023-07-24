const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
  datatbase: "tvshow_database",
});

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    });
  });
}

// async function demo() {
//     const result = await asyncMySQL();
// }

module.exports = asyncMySQL;
