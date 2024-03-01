import express from "express";

import auth from "../../app/middleware/auth";
import { ProductControllers } from "./product.controller";
import { USER_ROLE } from "../user/user.constant";


const router = express.Router();

router.post("/create-product", auth(USER_ROLE.admin), ProductControllers.createProduct);
router.get("/getAllProduct", ProductControllers.getAllProduct)


export const ProductRoutes = router;
