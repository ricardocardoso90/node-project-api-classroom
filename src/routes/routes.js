import express from "express";
import Controller from "../controllers/controller.js";

const router = express.Router();

router.get('/', Controller.products);
router.post('/', Controller.products);

export default router;