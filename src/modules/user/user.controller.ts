import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await UserServices.createUserIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is created succesfully",
    data: result,
  });
});
const createSeller = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await UserServices.createSellerIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Seller is created succesfully",
    data: result,
  });
});
const createAdmin = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await UserServices.createAdminIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin is created succesfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserServices.loginUser(req.body);

  const {  accessToken , user} = result;


  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${user.role} is logged in succesfully!`,
    data: {
      accessToken
    },
  });
});

export const UserController = {
  createUser,
  createSeller,
  createAdmin,
  loginUser
};
