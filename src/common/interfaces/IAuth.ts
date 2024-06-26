import { Status } from "../constants/user";

export interface IAuthUser {
  email: string;
  password: string;
}

export interface ICreateUser extends IAuthUser {
  firstName: string;
  lastName: string;
}

export interface IUserData {
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  favouriteObject: string[];
  updatedAt: string;
  _id: string;
}
export interface IUserResponse {
  status: Status;
  userData: IUserData;
}

export interface IUserStorage {
  email: string;
  userName: string;
  favouriteObject: string[];
}
