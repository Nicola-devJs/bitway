"use client";
import { ReactNode, createContext, useState } from "react";
import { IUserResponse } from "../interfaces/IAuth";

type UserType = IUserResponse | null;

interface IUserContext {
  user: UserType;
  changeUser: (user: UserType) => void;
}

export const UserContext = createContext<IUserContext>({ user: null } as IUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserType>(null);

  const changeUser = (user: UserType) => {
    setUserInfo(user);
  };

  return <UserContext.Provider value={{ user: userInfo, changeUser }}>{children}</UserContext.Provider>;
};
