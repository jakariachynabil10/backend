import express from "express";
import { UserController } from "./user.controller";
import auth from "../../app/middleware/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post("/register",  UserController.createUser);
router.post("/create-seller", auth(USER_ROLE.admin), UserController.createSeller)

router.post("/login", UserController.loginUser);

export const UserRoutes = router;
