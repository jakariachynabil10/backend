import express from "express";

import auth from "../../app/middleware/auth";
import { ProductControllers } from "./product.controller";
import { USER_ROLE } from "../user/user.constant";

import { ProductValidations } from "./product.validation";
import validateRequest from "../../app/middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-product",
  auth(USER_ROLE.admin),
  validateRequest(
    ProductValidations.createProductValidationSchema
    ),
  ProductControllers.createProduct
);
router.get("/getAllProduct", ProductControllers.getAllProduct);
router.get(
  "/get-single-product/:id",
  auth(USER_ROLE.admin, USER_ROLE.seller, USER_ROLE.user),
  ProductControllers.getSingleProduct
);

export const ProductRoutes = router;
