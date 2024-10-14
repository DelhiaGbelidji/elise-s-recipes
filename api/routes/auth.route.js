import express from "express";
import {
  register,
  login,
  getCurrentUser,
  google,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", google);
router.get("/me", getCurrentUser);

export default router;
