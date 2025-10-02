import express from "express";
import cors from "cors";
import { PORT } from "./global.ts";
import { getPosts, createPost } from "./controllers/posts.controller.ts";

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", getPosts);
app.post("/", createPost);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
