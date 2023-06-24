import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"newuser",
  password: "newpassword",
  database:"blog"
})