import { Router } from "express";
import connection from "../../connection";

const foxRouter = Router();

foxRouter.get("/fox", (req, res) => {
  connection.query("SELECT * FROM fox;", (err, results, fields) => {
    res.send({ message: results });
  });
});

foxRouter.post("/fox", (req, res) => {
  connection.query(
    `INSERT INTO fox (nickname, color, old, subspecies) VALUES (
    '${req.body.nickname}',
    '${req.body.color}',
    ${req.body.old},
    '${req.body.subspecies}'
    )`,
    (err) => {
      console.log(err);
      res.status(201);
      res.send({ message: "Registered!" });
    }
  );
});

foxRouter.delete("/fox", (req, res) => {
  connection.query(`DELETE FROM fox WHERE id = ${req.body.id}`, (err) => {
    console.log(err);
    res.status(200);
    res.send({ message: "Deleted!" });
  });
});

foxRouter.patch("/fox", (req, res) => {
  res.send({ message: "Updated!" });
});

export default foxRouter;
