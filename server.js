import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Userscript Template is running.");
});

app.listen(process.env.PORT || 3000);
