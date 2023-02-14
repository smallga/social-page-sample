import { UserModel } from "./user";

export interface NotifyModel {
  notifyUser: UserModel,
  message: string,
  time: string,
}