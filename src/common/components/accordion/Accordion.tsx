"use client";
import React, { FC, useState } from "react";
import styled from "styled-components";
import arrowAcardion from "@/assets/icons/arrow-top.svg";
import { TextApp } from "@/common/styledComponents/Text";
import { theme } from "@/assets/theme/theme";

interface IProps {
  label: string;
  children: React.ReactNode;
  zIndex?: number;
}

export const Accordion: FC<IProps> = ({ children, label, zIndex }) => {
  const [viewContent, setViewContent] = useState(false);
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setViewContent((prevState) => !prevState)}>
        <TextApp.Heading>{label}</TextApp.Heading>
        <Arrow $isUp={viewContent} />
      </AccordionHeader>
      <AccordionBody $view={viewContent} $zIndex={zIndex}>
        {children}
      </AccordionBody>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.span<{ $isUp: boolean }>`
  background-image: url(${arrowAcardion.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 0.694vw;
  height: 0.278vw;
  transform: ${(props) => (props.$isUp ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.2s ease-in;

  @media (max-width: ${theme.media.desktop}px) {
    width: 0.834vw;
    height: 0.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 1.302vw;
    height: 0.521vw;
  }
`;

const AccordionBody = styled.div<{ $view: boolean; $zIndex?: number }>`
  position: relative;
  z-index: ${(props) => props.$zIndex ?? 0};
  padding-top: ${(props) => (props.$view ? "0.694vw" : "0px")};
  transform: ${(props) => (props.$view ? "translateY(0px)" : "translateY(-0.694vw)")};
  visibility: ${(props) => (props.$view ? "visible" : "hidden")};
  opacity: ${(props) => (props.$view ? "1" : "0")};
  height: ${(props) => (props.$view ? "auto" : "0px")};
  transition: all 0.2s ease-in-out;

  @media (max-width: ${theme.media.desktop}px) {
    padding-top: ${(props) => (props.$view ? "0.834vw" : "0px")};
    transform: ${(props) => (props.$view ? "translateY(0px)" : "translateY(-0.834vw)")};
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-top: ${(props) => (props.$view ? "1.302vw" : "0px")};
    transform: ${(props) => (props.$view ? "translateY(0px)" : "translateY(-1.302vw)")};
  }
`;
