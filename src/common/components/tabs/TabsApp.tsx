"use client";
import { theme } from "@/assets/theme/theme";
import { SelectApp } from "@/common/UI/select/SelectApp";
import { transformAdaptiveSize } from "@/common/helpers/transformValues";
import { TextApp } from "@/common/styledComponents/Text";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

type ListTabsType = { id: number; title: string; content: React.ReactNode };

interface IProps {
  listTabs: ListTabsType[];
}

export const TabsApp: FC<IProps> = ({ listTabs: listTabsInitial }) => {
  const [listTabs, setListTabs] = useState<{ visible: ListTabsType[]; hidden: ListTabsType[] }>({
    visible: listTabsInitial,
    hidden: [],
  });
  const [activeTab, setActiveTab] = useState(listTabsInitial[0].id);

  const TabsNavigateWrapperRef = useRef<HTMLUListElement>(null);
  const TabsNavigateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(TabsNavigateWrapperRef.current && TabsNavigateRef.current)) {
      return;
    }

    // TODO Доделать чтобы при ресайзе окна браузера соответственно изменялся внешний вид табов
    if (TabsNavigateWrapperRef.current.offsetWidth >= TabsNavigateRef.current.offsetWidth) {
      setListTabs((prevList) => ({
        visible: prevList.visible.slice(0, prevList.visible.length - 1),
        hidden: listTabsInitial.slice(prevList.visible.length - 1),
      }));
    }
  }, [TabsNavigateRef.current?.offsetWidth]);

  const findTabContent = (id: number) => (tab: ListTabsType) => {
    return tab.id === id;
  };

  const listTabsMaping: <T extends ListTabsType>(
    targetId: number,
    replace: any
  ) => (item: T, id: number, list: T[]) => T = (targetId, replace) => (item) => {
    if (targetId === item.id) {
      return replace;
    }
    return item;
  };

  const replacementHiddenTabsHandler = (tabId: number) => {
    setActiveTab(tabId);
    setListTabs((prevList) => ({
      visible: prevList.visible.map(
        listTabsMaping((prevList.visible.at(-1) as ListTabsType).id, prevList.hidden.find(findTabContent(tabId)))
      ),
      hidden: prevList.hidden.map(listTabsMaping(tabId, prevList.visible.at(-1))),
    }));
  };

  return (
    <StyledTabs>
      <TabsNavigate ref={TabsNavigateRef}>
        <TabsNavigateWrapper ref={TabsNavigateWrapperRef}>
          {listTabs.visible.map((tab) => (
            <TabItem key={tab.id} $active={tab.id === activeTab} onClick={() => setActiveTab(tab.id)}>
              <TextApp
                size={20}
                weight={tab.id === activeTab ? 700 : 400}
                color={tab.id === activeTab ? theme.colors.blue : theme.colors.dark}
              >
                {tab.title}
              </TextApp>
            </TabItem>
          ))}
        </TabsNavigateWrapper>
        {listTabs.hidden.length ? (
          <SelectApp.Switcher
            changeHandler={(tabId) => replacementHiddenTabsHandler(tabId as number)}
            options={listTabs.hidden.map((tab) => ({
              label: tab.title,
              value: tab.id,
            }))}
            viewSide="left"
          />
        ) : null}
      </TabsNavigate>
      {listTabsInitial.find(findTabContent(activeTab))?.content}
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
  padding-bottom: 0.833vw;
  margin-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};

  & > div {
    margin-left: 2.083vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 1.001vw;
    margin-bottom: 1.668vw;

    & > div {
      margin-left: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 1.563vw;
    margin-bottom: 2.604vw;

    & > div {
      margin-left: 3.906vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-bottom: 2.824vw;
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
