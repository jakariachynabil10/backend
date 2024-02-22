import confiq from "../../app/confiq";
import { TLoginUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { createToken } from "./user.utilis";

const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload.email);

  if (!user) {
    throw new Error("This user is not found !");
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new Error("Password do not matched");

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    confiq.jwt_access_secret as string,
    confiq.jwt_access_expires_in as string
  );

  return {
    accessToken,
  };
};

export const UserServices = {
  createUserIntoDB,
  loginUser,
};
