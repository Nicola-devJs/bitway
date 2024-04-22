"use client";
import { theme } from "@/assets/theme/theme";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";
import { TextApp } from "@/common/styledComponents/Text";
import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface IProps {
  listTabs: { title: string; content: React.ReactNode }[];
}

export const TabsApp: FC<IProps> = ({ listTabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabs>
      <TabsNavigate>
        {listTabs.map((tab, id) => (
          <TabItem key={id} $active={id === activeTab} onClick={() => setActiveTab(id)}>
            <TextApp
              size={20}
              weight={id === activeTab ? 700 : 400}
              color={id === activeTab ? theme.colors.blue : theme.colors.dark}
            >
              {tab.title}
            </TextApp>
          </TabItem>
        ))}
      </TabsNavigate>
      <div style={{ overflow: "hidden" }}>
        <TabsTrack $pos={activeTab} $columns={listTabs.length}>
          {listTabs.map(({ content }, id) => (
            <div key={id}>{content}</div>
          ))}
        </TabsTrack>
      </div>
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  width: 100%;
`;

const TabsNavigate = styled.ul`
  width: 100%;
  display: flex;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
`;

const TabItem = styled.li<{ $active?: boolean }>`
  &:not(:last-child) {
    margin-right: 30px;
  }

  p {
    position: relative;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.blue};
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      bottom: -14.5px;
      height: 3px;
      background-color: ${theme.colors.blue};
      opacity: ${(props) => (props.$active ? 1 : 0)};
      transition: opacity 0.2s ease-in-out;
    }
  }
`;

const TabsTrack = styled.div<{ $pos: number; $columns: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.$columns}, 100%)`};
  transform: ${(props) => `translateX(-${100 * props.$pos}%)`};
  transition: transform 0.2s ease-in-out;
`;
