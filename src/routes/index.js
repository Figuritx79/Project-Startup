import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "My Web with express" })
);
router.get("/login", (req, res) => res.render("login"));
router.get("/accesorios", (req, res) => res.render("accesorios"));
router.get("/inferior", (req, res) => res.render("inferior"));
router.get("/superior", (req, res) => res.render("superior"));

export default router;
