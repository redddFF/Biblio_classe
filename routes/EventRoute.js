import express from "express";
import { createEvent } from "../controllers/EventController.js";
import { validateEvent } from "../middellwares/EventMiddellware.js";

const router = express.Router();

router.post("/events", validateEvent, createEvent);

export default router;
