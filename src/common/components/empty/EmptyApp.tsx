"use client";
import { theme } from "@/assets/theme/theme";
import { FlexContent } from "@/common/styledComponents/Flex";
import { TextApp } from "@/common/styledComponents/Text";
import React from "react";
import styled from "styled-components";

interface IProps {
  emptyText: string;
}

export const EmptyApp = ({ emptyText }: IProps) => {
  return (
    <StyledEmptyApp>
      <TextApp.Heading size={30}>{emptyText}</TextApp.Heading>
    </StyledEmptyApp>
  );
};

const StyledEmptyApp = styled(FlexContent)`
  width: 100%;
  height: 20vw;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.grayOpacity(0.1)};
`;
