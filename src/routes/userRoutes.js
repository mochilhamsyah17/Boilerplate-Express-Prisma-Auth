import express from "express";
import { authenticate, authorize } from "../middlewares/authMiddleware.js";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", authenticate, authorize("admin"), getUsers);

export default router;
