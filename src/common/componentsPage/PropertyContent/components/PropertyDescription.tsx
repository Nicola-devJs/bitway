import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import React from "react";
import styled from "styled-components";

export const PropertyDescription = () => {
  return (
    <StyledPropertyDescription>
      <DescriptionBlock>
        <TextApp>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius voluptatum sit fugit, eveniet
          reprehenderit mollitia cum aliquam sint impedit quia nam doloremque quidem perspiciatis, maxime ratione! Esse,
          inventore possimus.
        </TextApp>
        <TextApp>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius voluptatum sit fugit, eveniet
          reprehenderit mollitia cum aliquam sint impedit quia nam doloremque quidem perspiciatis, maxime ratione! Esse,
          inventore possimus.
        </TextApp>
        <TextApp>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius voluptatum sit fugit, eveniet
          reprehenderit mollitia cum aliquam sint impedit quia nam doloremque quidem perspiciatis, maxime ratione! Esse,
          inventore possimus.
        </TextApp>
      </DescriptionBlock>
      <div>
        <TextApp.Heading>Details</TextApp.Heading>
        <DetailsTable>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </DetailsTable>
      </div>
    </StyledPropertyDescription>
  );
};

const StyledPropertyDescription = styled.div`
  & > div {
    h5 {
      margin-bottom: 20px;
    }

    &:not(:last-child) {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
    }
  }
`;

const DescriptionBlock = styled.div`
  & p:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const DetailsTable = styled.ul`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto); */
  column-count: 2;
  column-rule: 2px solid #000;
`;
