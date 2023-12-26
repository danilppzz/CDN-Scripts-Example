// Imports //
import express from "express";
import { join, parse } from "path";
import { promises as fs } from "fs";

// Swagger Import and Configuration //
import swaggerOptions from "./swagger.js";
import { serve, setup } from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// Declaratios and Variables //
const app = express();
const PORT = 3000;
const swaggerDocs = swaggerJsdoc(swaggerOptions);
const scriptsPath = join("./", "scripts");

// app.use //
app.use("/docs", serve, setup(swaggerDocs));

app.use("/scripts", express.static(scriptsPath));

app.use("/scripts/", (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey && apiKey === "yNxkPSyktVoJ6E7S") {
    next();
  } else {
    res.status(403).send("Unauthorized access.");
  }
});

// Default Root
app.get("/", async (req, res) => {
  try {
    const files = await fs.readdir(scriptsPath);
    const fileNamesWithExtension = files.map((file) => `${parse(file).name}.js`);
    res
      .status(200)
      .json({ status: 200, version: "1.0.0", owner: "danilppzz", files: fileNamesWithExtension });
  } catch (error) {
    console.error("Error reading folder:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Scripts Endpoint
app.get("/scripts/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`<script src="/scripts/${id}.js"></script>`);
});

app.post("/scripts/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Uploaded /scripts/${id}.js`);
});

app.delete("/scripts/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Deleted /scripts/${id}.js`);
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
