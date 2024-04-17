"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";

export const ContainerApp = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 80.556vw;
  padding: 0 1.042vw;
  margin: 0 auto;

  @media (max-width: ${theme.media.desktop}px) {
    width: 96.747vw;
    padding: 0 1.251vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 100%;
    padding: 0 1.953vw;
  }
`;
