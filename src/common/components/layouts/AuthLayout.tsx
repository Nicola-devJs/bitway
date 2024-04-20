import React from "react";
import styled from "styled-components";
import { NextImage } from "../NextImage";
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
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(164, 166, 172, 0.2);
      backdrop-filter: blur(30px);
    }
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
    padding: 15vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding: 5vw;
  }
`;
