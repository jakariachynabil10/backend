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
  