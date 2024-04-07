"use client";
import React from "react";
import styled from "styled-components";
import { ButtonApp } from "@/UI/button/ButtonApp";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/styledComponents/ContainerApp";
import { LogoApp } from "../logo/LogoApp";

export const HeaderApp = () => {
  return (
    <HeaderContainer>
      <ContainerApp>
        <HeaderBody>
          <LogoApp />
          <ButtonApp>Login</ButtonApp>
        </HeaderBody>
      </ContainerApp>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding-block: 1.389vw;
  background-color: #fff;

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 2.604vw;
  }
`;

const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #000;
`;
