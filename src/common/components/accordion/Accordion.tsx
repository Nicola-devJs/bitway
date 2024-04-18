"use client";
import React, { useState } from "react";
import styled from "styled-components";
import arrowAcardion from "@/assets/icons/arrow-top.svg";
import { TextApp } from "@/common/styledComponents/Text";

export const Accordion = () => {
  const [viewContent, setViewContent] = useState(false);
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setViewContent((prevState) => !prevState)}>
        <TextApp.Heading>Select Location</TextApp.Heading>
        <Arrow $isUp={viewContent} />
      </AccordionHeader>
      <AccordionBody $view={viewContent}>ldfngdnj gjfgnfkjnhfgjkhn fghfjkgjnhlfgk hfglhfghlfghm</AccordionBody>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  width: 244px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Arrow = styled.span<{ $isUp: boolean }>`
  background-image: url(${arrowAcardion.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 10px;
  height: 4px;
  transform: ${(props) => (props.$isUp ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.2s ease-in;
`;

const AccordionBody = styled.div<{ $view: boolean }>`
  transform: ${(props) => (props.$view ? "translateY(0px)" : "translateY(-10px)")};
  visibility: ${(props) => (props.$view ? "visible" : "hidden")};
  opacity: ${(props) => (props.$view ? "1" : "0")};
  height: ${(props) => (props.$view ? "auto" : "0px")};
  transition: all 0.2s ease-in-out;
`;
