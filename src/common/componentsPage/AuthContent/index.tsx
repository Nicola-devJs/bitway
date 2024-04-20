"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { TextApp } from "../../styledComponents/Text";
import { playfair } from "../../constants/font";
import { theme } from "@/assets/theme/theme";

import goBackIconBlack from "@/assets/icons/chevron-left-b.svg";
import goBackIconWhite from "@/assets/icons/chevron-left-w.svg";

interface IProps {
  children?: React.ReactNode;
  title: string;
  subTitle: string;
}

export const AuthContent: FC<IProps> = ({ children, title, subTitle }) => {
  const { back } = useRouter();

  return (
    <ContentWrappper>
      <GoBack onClick={() => back()}>Back</GoBack>
      <HeaderBlock>
        <TextApp.Heading size={30} className={playfair.className}>
          {title}
        </TextApp.Heading>
        <TextApp color={theme.colors.gray}>{subTitle}</TextApp>
      </HeaderBlock>
      {children}
    </ContentWrappper>
  );
};

const GoBack = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2.083vw;
  width: max-content;

  &:before {
    content: "";
    background-image: url(${goBackIconBlack.src});
    background-repeat: no-repeat;
    background-size: cover;
    width: 0.556vw;
    height: 1.181vw;
    margin-right: 13px;
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    transform: translateX(-4px);
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 2.502vw;
    color: ${theme.colors.white};
    &:before {
      background-image: url(${goBackIconWhite.src});
      width: 0.667vw;
      height: 1.418vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 3.906vw;
    &:before {
      width: 1.042vw;
      height: 2.214vw;
    }
  }
`;

const HeaderBlock = styled.div`
  h5 {
    margin-bottom: 0.347vw;
  }

  margin-bottom: 2.083vw;

  @media (max-width: ${theme.media.desktop}px) {
    h5 {
      margin-bottom: 0.417vw;
      color: ${theme.colors.white};
    }

    p {
      color: ${theme.colors.white};
      opacity: 0.8;
    }

    margin-bottom: 2.502vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    h5 {
      margin-bottom: 0.651vw;
    }

    margin-bottom: 3.906vw;
  }
`;

const ContentWrappper = styled.div`
  form > * {
    &:not(:first-child) {
      margin-top: 1.111vw;
    }

    &:last-child {
      margin-top: 2.083vw;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 100%;

    label {
      color: ${theme.colors.white};
    }

    form > * {
      &:not(:first-child) {
        margin-top: 1.334vw;
      }

      &:last-child {
        margin-top: 2.502vw;
      }
    }
  }
  @media (max-width: ${theme.media.tablet}px) {
    form > * {
      &:not(:first-child) {
        margin-top: 2.083vw;
      }

      &:last-child {
        margin-top: 3.906vw;
      }
    }
  }
`;
