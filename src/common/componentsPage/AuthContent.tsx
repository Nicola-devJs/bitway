"use client";
import React, { FC } from "react";
import { TextApp } from "../styledComponents/Text";
import { playfair } from "../constants/font";
import { FormApp } from "../components/form/FormApp";
import { InputApp } from "../UI/input/InputApp";
import { theme } from "@/assets/theme/theme";
import styled from "styled-components";
import { ButtonApp } from "../UI/button/ButtonApp";

interface IProps {
  children?: React.ReactNode;
  title: string;
  subTitle: string;
}

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

export const AuthContent: FC<IProps> = ({ children, title, subTitle }) => {
  const submitHadler = (data: FormValues) => {};

  return (
    <ContentWrappper>
      <HeaderBlock>
        <TextApp.Heading size={30} className={playfair.className}>
          {title}
        </TextApp.Heading>
        <TextApp color={theme.colors.gray}>{subTitle}</TextApp>
      </HeaderBlock>

      <FormApp handlerCallback={submitHadler}>
        <InputApp placeholder="Email" type="email" label="Email Address" />
        <InputApp placeholder="Password" type="password" label="Password" />
        <InputApp.Checkbox id="login" label="Remember Me" />
        <ButtonApp>Login</ButtonApp>
      </FormApp>
    </ContentWrappper>
  );
};

const HeaderBlock = styled.div`
  h5 {
    margin-bottom: 0.347vw;
  }

  margin-bottom: 2.083vw;

  @media (max-width: ${theme.media.desktop}px) {
    h5 {
      margin-bottom: 0.417vw;
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
