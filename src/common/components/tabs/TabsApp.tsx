"use client";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import React, { FC, useState } from "react";
import styled from "styled-components";

type ListTabsType = { title: string; content: React.ReactNode };

interface IProps {
  listTabs: ListTabsType[];
}

export const TabsApp: FC<IProps> = ({ listTabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabs>
      <TabsNavigate>
        <TabsNavigateWrapper>
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
        </TabsNavigateWrapper>
      </TabsNavigate>
      {listTabs[activeTab].content}
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  width: 100%;
`;

const TabsNavigate = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 1.042vw;
  margin-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
  overflow-x: auto;

  & > div {
    margin-left: 2.083vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-bottom: 15px;
    margin-bottom: 20px;

    & > div {
      margin-left: 30px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 1.251vw;
    margin-bottom: 1.668vw;

    & > div {
      margin-left: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 1.953vw;
    margin-bottom: 2.604vw;

    & > div {
      margin-left: 3.906vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-bottom: 3.529vw;
    margin-bottom: 4.706vw;

    & > div {
      margin-left: 7.059vw;
    }
  }
`;

const TabsNavigateWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const TabItem = styled.li<{ $active?: boolean }>`
  text-wrap: nowrap;
  &:not(:last-child) {
    margin-right: 2.083vw;
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
      bottom: -1.007vw;
      height: 0.208vw;
      background-color: ${theme.colors.blue};
      opacity: ${(props) => (props.$active ? 1 : 0)};
      transition: opacity 0.2s ease-in-out;
    }
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    &:not(:last-child) {
      margin-right: 30px;
    }

    p::after {
      bottom: -14.5px;
      height: 3px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    &:not(:last-child) {
      margin-right: 2.502vw;
    }

    p::after {
      bottom: -1.209vw;
      height: 0.25vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    &:not(:last-child) {
      margin-right: 3.906vw;
    }

    p::after {
      bottom: -1.888vw;
      height: 0.391vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    &:not(:last-child) {
      margin-right: 7.059vw;
    }

    p::after {
      bottom: -3.412vw;
      height: 0.706vw;
    }
  }
`;
