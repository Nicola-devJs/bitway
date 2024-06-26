import { Status } from "../constants/user";

export interface IMessageData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface IMessageResponse {
  status: Status;
  message: string;
}
