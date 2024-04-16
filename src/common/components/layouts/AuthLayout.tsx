import React from "react";
import styled from "styled-components";
import { NextImage } from "../NextImage";
import createImage from "@/assets/images/auth/create.jpg";
import { theme } from "@/assets/theme/theme";
import { authPages } from "@/common/constants/authPages";

interface IProps {
  children: React.ReactNode;
  authPage: string;
}

export default function AuthLayout({ children, authPage }: IProps) {
  return (
    <Wrapper>
      <ContainerImage>
        <NextImage info={authPages?.[authPage]} />
      </ContainerImage>
      <ContainerContent>{children}</ContainerContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const ContainerImage = styled.div`
  width: 58%;
  height: 100%;
  div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 100%;
    img {
      filter: blur(6px);
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
  }
`;

const ContainerContent = styled.div`
  margin-inline: 3.472vw;
  width: 30.903vw;
  @media (max-width: ${theme.media.desktop}px) {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 70vw;
    margin: 0 auto;
  }

  @media (max-width: ${theme.media.tablet}px) {
    max-width: 80vw;
  }
`;
