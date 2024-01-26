import express from "express";
import { createMovie, getMovies } from "../controllers/movie.js";
import { validateInput } from "../middlewares/movie-input-validation.js";

const router = express.Router();

router.post(
  "/",
  (req, res, next) => {
    if (!validateInput(req.body)) {
      res.status(400).json({ error: "missing input" });
      return;
    }
    next();
  },
  createMovie
);

router.get("/",getMovies);

export default router;
