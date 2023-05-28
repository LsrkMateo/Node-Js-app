import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, "views"));

app.set("views", join(__dirname, "views"));
app.set("view engine", ejs);

app.get("/", (req, res) => res.render("index.ejs"));

app.listen(3000);
console.log("servidor esta escuchando en el puerto", 3000);
