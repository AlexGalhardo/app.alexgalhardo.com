import { Router } from "express";

import ProfileController from "../controllers/web/profile.controller";
import { isNotAuthenticated } from "./public.routes";

const router = Router();

export default router
    .get("/", isNotAuthenticated, ProfileController.getViewProfile)

    .post("/", isNotAuthenticated, ProfileController.updateProfile)

    .get("/logout", isNotAuthenticated, ProfileController.logout);
