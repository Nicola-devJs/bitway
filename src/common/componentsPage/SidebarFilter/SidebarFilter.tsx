"use client";
import { useContext } from "react";
import { Accordion } from "@/common/components/accordion/Accordion";
import ComponentsSidebarFilter from "./components/ComponentsSidebarFilter";
import styled, { css } from "styled-components";
import { theme } from "@/assets/theme/theme";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { useScreenExtension } from "@/common/hooks/useScreenExtension";

import { FilterContext } from "@/common/hoc/FilterProvider";

export const SidebarFilter = () => {
  const { isShowFilter, hideFilter } = useContext(FilterContext);
  const [maxTabletScreen] = useScreenExtension([{ screenExtension: theme.media.tablet, maxScreen: true }]);
  return (
    <StyledSidebar $showTabletFilter={isShowFilter}>
      {ComponentsSidebarFilter.map((filter, id) => (
        <ContentContainer key={id}>
          <Accordion label={filter.label} zIndex={filter.zIndex} initialView={true}>
            {filter.content}
          </Accordion>
        </ContentContainer>
      ))}

      {maxTabletScreen && (
        <>
          <ButtonApp onClick={hideFilter}>Закрыть</ButtonApp>
          <OverlaySidebar onClick={hideFilter} />
        </>
      )}
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside<{ $showTabletFilter: boolean }>`
  min-width: 16.944vw;

  @media (max-width: ${theme.media.desktop}px) {
    min-width: 20.35vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 100;
    background-color: ${theme.colors.white};
    width: 50%;
    padding: 3.906vw;

    transform: translateX(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    pointer-events: none;

    ${(props) =>
      props.$showTabletFilter &&
      css`
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        & ${OverlaySidebar} {
          opacity: 1;
        }
      `}
  }
`;

const OverlaySidebar = styled.div`
  position: fixed;
  left: 100%;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: ${theme.colors.darkOpacity(0.2)};
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.2s ease-in 0.1s;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.1)};

  margin-bottom: 1.389vw;

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 1.668vw;
    margin-bottom: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 2.604vw;
    margin-bottom: 2.604vw;
  }
`;
