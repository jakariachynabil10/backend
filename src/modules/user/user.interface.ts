import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';


export interface TUser {
    name: string
    email : string
    password: string
    role: 'admin' | 'seller' | 'user'
    profileImg?: string
  }
  
  export type TLoginUser = {
    email: string
    password: string
  }

  export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByEmail(email: string): Promise<TUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
    // isJWTIssuedBeforePasswordChanged(
    //   passwordChangedTimestamp: Date,
    //   jwtIssuedTimestamp: number,
    // ): boolean;
  }
  
  export type TUserRole = keyof typeof USER_ROLE;
  
  

