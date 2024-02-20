import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { UserServices } from "./user.service"


const createUser = catchAsync(async (req, res) => {
    const data = req.body
  
    const result = await UserServices.createUserIntoDB(data)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created succesfully',
      data: result,
    })
  })


  export const UserController = {
    createUser
  }