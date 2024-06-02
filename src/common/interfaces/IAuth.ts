export interface IAuthUser {
  email: string;
  password: string;
}

export interface ICreateUser extends IAuthUser {
  firstName: string;
  lastName: string;
}

export interface IUserResponse extends IAuthUser {
  status: string;
  token: string;
}