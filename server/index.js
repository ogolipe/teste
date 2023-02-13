const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  port: "3307",
  password: "",
  database: "crudnotas",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { titulo } = req.body;
  const { anotacao } = req.body;

  let mysql = "INSERT INTO notas ( name, titulo, anotacao) VALUES (?, ?, ?)";
  db.query(mysql, [name, titulo, anotacao], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { titulo } = req.body;
  const { anotacao } = req.body;

  let mysql =
    "SELECT * from notas WHERE name = ? AND titulo = ? AND anotacao = ?";
  db.query(mysql, [name, titulo, anotacao], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM notas";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { titulo } = req.body;
  const { anotacao } = req.body;
  let mysql = "UPDATE notas SET name = ?, titulo = ?, anotacao = ? WHERE id = ?";
  db.query(mysql, [name, titulo, anotacao, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM notas WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
