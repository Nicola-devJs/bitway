"use client";
import { Accordion } from "@/common/components/accordion/Accordion";
import ComponentsSidebarFilter from "./components/ComponentsSidebarFilter";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";

export const SidebarFilter = () => {
  return (
    <StyledSidebar>
      {ComponentsSidebarFilter.map((filter, id) => (
        <ContentContainer key={id}>
          <Accordion label={filter.label} zIndex={filter.zIndex}>
            {filter.content}
          </Accordion>
        </ContentContainer>
      ))}
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  width: 16.944vw;

  @media (max-width: ${theme.media.desktop}px) {
    width: 20.35vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 31.771vw;
  }
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
