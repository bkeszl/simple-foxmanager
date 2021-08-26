import express from "express";
import cors from "cors";
require("dotenv").config();

import routes from "./routes/fox-controller";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
