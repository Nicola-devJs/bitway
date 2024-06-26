"use client";
import { theme } from "@/assets/theme/theme";
import { FlexContent } from "@/common/styledComponents/Flex";
import React from "react";
import styled, { keyframes } from "styled-components";

export const LoaderApp = () => {
  return (
    <FlexContent $justify="center" $align="center" style={{ height: "100vh" }}>
      <CyrcleLoader>
        <div></div>
      </CyrcleLoader>
    </FlexContent>
  );
};

const loaderScale = keyframes`
   0% {
      transform: scale(1) rotate(0deg);
   }
   50% {
      transform: scale(1.2) rotate(180deg);
   }
   100% {
      transform: scale(1) rotate(360deg);
   }
`;

const CyrcleLoader = styled.div`
  position: relative;
  width: 130px;
  height: 130px;

  animation: ${loaderScale} 2s infinite ease-in-out;

  div {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 120px;
    height: 120px;
    background-color: transparent;
    border-radius: 50%;
  }

  div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(to right, ${theme.colors.blue}, ${theme.colors.white});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    box-sizing: border-box;
  }
`;
