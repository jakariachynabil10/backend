import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../../modules/user/user.interface";
import catchAsync from "../../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import { verifyToken } from "../../modules/user/user.utilis";
import confiq from "../confiq";
import { User } from "../../modules/user/user.model";
import { JwtPayload } from "jsonwebtoken";

// Define a new interface that extends the Request interface
interface AuthRequest extends Request {
  user?: JwtPayload & { role: string }; // Define the user property
}

const auth = (...requireRoles: TUserRole[]) => {
  return catchAsync(async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    const decoded = verifyToken(token, confiq.jwt_access_secret as string);

    const { role, userEmail, iat } = decoded;

    const user = await User.isUserExistsByEmail(userEmail);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
    }

    if (requireRoles && !requireRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You are not authorized!',
      );
    }

    req.user = decoded as JwtPayload & { role: string };
    
    next();
  });
};

export default auth;
