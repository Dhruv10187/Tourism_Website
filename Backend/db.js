import mysql2 from "mysql2";

export const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "dhruv",
  database: "project_Backend",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});





