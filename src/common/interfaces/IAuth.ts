import { Status } from "../constants/status";

export interface IAuthUser {
  email: string;
  password: string;
}

export interface ICreateUser extends IAuthUser {
  firstName: string;
  lastName: string;
}

export interface IUserResponse {
  status: Status;
  userData: {
    createdAt: string;
    email: string;
    firstName: string;
    lastName: string;
    updatedAt: string;
    _id: string;
  };
}
