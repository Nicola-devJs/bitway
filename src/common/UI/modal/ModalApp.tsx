"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";
import { playfair } from "@/common/constants/font";
import { TextApp } from "@/common/styledComponents/Text";
import { ButtonApp } from "../button/ButtonApp";
import alertIcon from "@/assets/icons/alert-icon.svg";

type ModalType = { show?: () => void; hide?: () => void };

export const modal: ModalType = {};

interface IAlertProps {
  title: string;
  text: string;
  textButton: string;
  width?: number;
  buttonHandler?: () => void;
}

interface IModalProps {
  width?: number;
  children: React.ReactNode;
}

const ModalApp = ({ width = 432, children }: IModalProps) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    modal.show = () => setShow("show");
    modal.hide = () => setShow("");
  }, []);

  return (
    <ModalOverlay className={show} onClick={modal.hide}>
      <ModalBody onClick={(e) => e.stopPropagation()} $width={width}>
        {children}
      </ModalBody>
    </ModalOverlay>
  );
};

ModalApp.Alert = ({ text, title, width = 432, textButton, buttonHandler }: IAlertProps) => {
  const [show, setShow] = useState("");

  useEffect(() => {
    modal.show = () => setShow("show");
    modal.hide = () => setShow("");
  }, []);

  return (
    <ModalOverlay className={show} onClick={modal.hide}>
      <ModalBody onClick={(e) => e.stopPropagation()} $width={width}>
        <ModalContent>
          <IconAlertModal>
            <span></span>
          </IconAlertModal>
          <TextApp.Heading className={playfair.className} size={24}>
            {title}
          </TextApp.Heading>
          <TextApp>{text}</TextApp>
          <ButtonApp onClick={buttonHandler || modal.hide}>{textButton}</ButtonApp>
        </ModalContent>
      </ModalBody>
    </ModalOverlay>
  );
};

export { ModalApp };

const ModalBody = styled.div<{ $width: number }>`
  width: ${(props) => transformAdaptiveSize(props.$width)};
  background-color: ${theme.colors.white};
  border-radius: 1.389vw;
  padding: 2.083vw 1.389vw 1.597vw;
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.2s ease-in-out 0.1s;

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.desktop)};
    border-radius: 1.668vw;
    padding: 2.502vw 1.668vw 1.918vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => transformAdaptiveSize(props.$width, theme.media.tablet)};
    border-radius: 2.604vw;
    padding: 3.906vw 2.604vw 2.995vw;
  }
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(164, 166, 172, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0px);
  visibility: hidden;
  transition: all 0.2s ease-in-out;

  &.show {
    visibility: visible;
    backdrop-filter: blur(5px);
    & ${ModalBody} {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h5 {
    margin-bottom: 0.694vw;
  }

  & p {
    margin-bottom: 2.083vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    & h5 {
      margin-bottom: 0.834vw;
    }

    & p {
      margin-bottom: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & h5 {
      margin-bottom: 1.302vw;
    }

    & p {
      margin-bottom: 3.906vw;
    }
  }
`;

const IconAlertModal = styled.div`
  width: 4.444vw;
  height: 4.444vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.blue};
  margin-bottom: 2.917vw;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    width: 5.972vw;
    height: 5.972vw;
    background-color: rgba(62, 84, 235, 0.1);
  }

  &::after {
    width: 7.5vw;
    height: 7.5vw;
    background-color: rgba(62, 84, 235, 0.05);
  }

  & span {
    background-image: url(${alertIcon.src});
    background-size: cover;
    background-repeat: no-repeat;
    width: 1.389vw;
    height: 1.389vw;
  }
`;
