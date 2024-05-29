"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  showType?: "top" | "bottom";
}

export const ErrorMessage: FC<IProps> = ({ children, showType = "top" }) => {
  return (
    <StyledErrorMessage $showError={!!children} $show={showType}>
      {children}
    </StyledErrorMessage>
  );
};

const StyledErrorMessage = styled.span<{ $showError: boolean; $show: "top" | "bottom" }>`
  position: absolute;
  ${(props) => (props.$show === "top" ? "right: 0; top: 0;" : `left: 0; bottom: -1.597vw;`)}
  color: ${theme.colors.red};
  opacity: ${(props) => (props.$showError ? 1 : 0)};
  transform: ${(props) =>
    props.$show === "top"
      ? props.$showError
        ? `translateY(0vw)`
        : `translateY(-1vw)`
      : props.$showError
      ? `translateY(0vw)`
      : `translateY(1vw)`};
  transition: all 0.2s;

  @media (min-width: ${theme.media.desktopLarge}px) {
    ${(props) => (props.$show === "top" ? "right: 0; top: 0;" : `left: 0; bottom: -23px;`)}
  }

  @media (max-width: ${theme.media.desktop}px) {
    ${(props) => (props.$show === "top" ? "right: 0; top: 0;" : `left: 0; bottom: -1.918vw;`)}
  }

  @media (max-width: ${theme.media.tablet}px) {
    ${(props) => (props.$show === "top" ? "right: 0; top: 0;" : `left: 0; bottom: -2.995vw;`)}
  }
`;
