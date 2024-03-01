import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await ProductServices.CreateProductToDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created succesfully",
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  console.log(req.query);
  const result = await ProductServices.getAllProductFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Product Retrived succesfully",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
};
