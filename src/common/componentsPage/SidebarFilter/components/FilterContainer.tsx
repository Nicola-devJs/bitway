import { theme } from "@/assets/theme/theme";
import { Accordion } from "@/common/components/accordion/Accordion";
import { ReactNode, FC } from "react";
import styled from "styled-components";

interface IFilterContainer {
  label: string;
  zIndex?: number;
  children: ReactNode;
}

export const FilterContainer: FC<IFilterContainer> = ({ children, label, zIndex }) => {
  return (
    <ContentContainer>
      <Accordion label={label} zIndex={zIndex} initialView={true}>
        {children}
      </Accordion>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  padding-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.1)};

  margin-bottom: 1.389vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 1.668vw;
    margin-bottom: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 2.604vw;
    margin-bottom: 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-bottom: 4.706vw;
    margin-bottom: 4.706vw;
  }
`;
