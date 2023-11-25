import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "My Web with express" })
);
router.get("/about", (req, res) => res.render("about"));
router.get("/login", (req, res) => res.render("login"));
router.get("/accesorios", (req, res) => res.render("accesorios"));

export default router;
