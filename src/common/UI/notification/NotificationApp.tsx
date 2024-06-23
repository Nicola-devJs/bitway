"use client";
import { theme } from "@/assets/theme/theme";
import { NotificationType } from "@/common/hoc/NotificationProvider";
import React from "react";
import styled from "styled-components";
import closeNotification from "@/assets/icons/close-slider.svg";
import { NextImage } from "@/common/components/NextImage";
import { TextApp } from "@/common/styledComponents/Text";
import { Status } from "@/common/constants/user";

interface IProps {
  notification: NotificationType;
  handleRemove: (id: number) => void;
}

export const NotificationApp = ({ notification: { id, text, type }, handleRemove }: IProps) => {
  const removeHandler = () => {
    handleRemove(id);
  };

  return (
    <StyledNotification $type={type}>
      <TextApp color={theme.colors.white}>{text}</TextApp>
      <CloseIcon info={closeNotification} $width={24} $height={24} onClick={removeHandler} />
    </StyledNotification>
  );
};

const StyledNotification = styled.div<{ $type: Status }>`
  width: max-content;
  padding: 1.111vw 1.667vw;
  border-radius: 6px;
  background-color: ${(props) => (props.$type === Status.SUCCESS ? theme.colors.blue : theme.colors.red)};
  color: ${theme.colors.white};
  display: flex;
  align-items: center;

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding: 16px 24px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.334vw 2.002vw;
  }
  @media (max-width: ${theme.media.tablet}px) {
    padding: 2.083vw 3.125vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    padding: 3.765vw 5.647vw;
  }
`;

const CloseIcon = styled(NextImage)`
  cursor: pointer;
  margin-left: 1.667vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin-left: 24px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-left: 2.002vw;
  }
  @media (max-width: ${theme.media.tablet}px) {
    margin-left: 3.125vw;
  }
  @media (max-width: ${theme.media.phone}px) {
    margin-left: 5.647vw;
  }
`;
