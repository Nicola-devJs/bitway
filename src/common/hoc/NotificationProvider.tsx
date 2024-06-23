"use client";
import { ReactNode, createContext, useState } from "react";
import styled from "styled-components";
import { NotificationApp } from "../UI/notification/NotificationApp";
import { theme } from "@/assets/theme/theme";
import { Status } from "../constants/user";

export interface NotificationType {
  text: string;
  type: Status;
  id: number;
}

export interface NotificationValue extends Omit<NotificationType, "id"> {}

interface INotificationContext {
  notifications: NotificationType[];
  addNotification: (notification: NotificationValue) => void;
  removeNotification: (id: number) => void;
}

export const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<INotificationContext["notifications"]>([]);

  const addNotification = (newNotification: NotificationValue) => {
    const id = Date.now();
    setNotifications([...notifications, { id, ...newNotification }]);

    // TODO Разобраться с адекватным исчезновением
    //  setTimeout(() => {
    //    removeNotification(id);
    //  }, 2000);
  };

  const removeNotification = (id: number) => {
    const removeOneNotification = notifications.filter((notif) => notif.id !== id);
    setNotifications(removeOneNotification);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      <NotificationContainer>
        {notifications.map((notif) => (
          <NotificationApp key={notif.text} notification={notif} handleRemove={removeNotification} />
        ))}
      </NotificationContainer>
      {children}
    </NotificationContext.Provider>
  );
};

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.417vw;
  position: fixed;
  right: 5vw;
  top: 5vw;
  z-index: 19999;

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 6px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 0.5vw;
  }
  @media (max-width: ${theme.media.tablet}px) {
    gap: 0.781vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    gap: 1.412vw;
  }
`;
