"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { NextImage } from "../NextImage";
import cardImg from "@/assets/images/main-img.jpg";
import { TextApp } from "@/common/styledComponents/Text";
import { playfair } from "@/common/constants/font";
import { propertyCardIcons } from "@/common/constants/constantImages";
import iconHeart from "@/assets/icons/property-card/heart.svg";
import { ShowType } from "../listProperties/ListProperties";
import { PropertyActions } from "../propertyActions/PropertyActions";
import { IPropertyCard } from "@/common/interfaces/IProperty";

interface IProps {}

const iconComponents = [
  { icon: "bed", count: 2 },
  { icon: "bath", count: 1 },
  { icon: "car", count: 2 },
];

interface IProps extends IPropertyCard {
  typeShow: ShowType;
  id: number;
}

export const PropertyCard: FC<IProps> = ({ typeShow, id, author, description, heading, price }) => {
  return (
    <PropertyCardContainer $typeShow={typeShow}>
      <ContainerImage $typeShow={typeShow}>
        <NextImage info={cardImg} $fullWidth />
        <span></span>
      </ContainerImage>
      <PropertyCardContent>
        <Link href={`/properties/luxury-apartment-in-california`}>
          <TextApp.Heading className={playfair.className} size={24} weight={700}>
            {heading}
          </TextApp.Heading>
        </Link>
        <TextApp size={20}>${price}</TextApp>
        <TextApp color={theme.colors.gray} className="property_card_text">
          {description}
        </TextApp>
        <PropertyComponents>
          {iconComponents.map((comp) => (
            <div key={comp.icon}>
              <NextImage info={propertyCardIcons[comp.icon]} $width={24} /> <span>{comp.count}</span>
            </div>
          ))}
        </PropertyComponents>
        <PropertyCardBottom>
          <Profile>
            <div>
              <NextImage info={cardImg} $width={34} $height={34} />
            </div>
            <TextApp>{author.name}</TextApp>
          </Profile>
          <PropertyActions gapActions={8} sizeIcon={18} sizeWrapper={34} />
        </PropertyCardBottom>
      </PropertyCardContent>
    </PropertyCardContainer>
  );
};

const PropertyCardContainer = styled.article<{ $typeShow: ShowType }>`
  background-color: ${theme.colors.white};
  width: 100%;
  border-radius: 1.111vw;
  padding: 1.389vw;
  display: flex;
  flex-direction: ${(props) => (props.$typeShow === "tile" ? "column" : "row")};

  h5,
  p {
    margin-bottom: 0.694vw;

    &.property_card_text {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    h5,
    p {
      margin-bottom: 0.834vw;

      &.property_card_text {
        margin-bottom: 0;
      }
    }

    border-radius: 1.334vw;
    padding: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    h5,
    p {
      margin-bottom: 1.302vw;

      &.property_card_text {
        margin-bottom: 0;
      }
    }

    border-radius: 2.083vw;
    padding: 2.604vw;
  }
`;

const ContainerImage = styled.div<{ $typeShow: ShowType }>`
  width: ${(props) => (props.$typeShow === "tile" ? "100%" : "22.639vw")};
  height: ${(props) => (props.$typeShow === "tile" ? "18.472vw" : "16.528vw")};
  border-radius: 0.833vw;
  margin: ${(props) => (props.$typeShow === "tile" ? "0 0 1.111vw 0" : "0 1.389vw 0 0")};
  overflow: hidden;
  position: relative;

  div {
    height: inherit;
  }

  span {
    position: absolute;
    top: 1.111vw;
    right: 1.111vw;
    width: 2.222vw;
    height: 2.222vw;
    border-radius: 0.347vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.whiteOpacity(0.8)};
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;

    &:after {
      content: "";
      background-image: url(${iconHeart.src});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 1.389vw;
      height: 1.389vw;
    }
  }

  &:hover span {
    opacity: 1;
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$typeShow === "tile" ? "100%" : "27.189vw")};
    height: ${(props) => (props.$typeShow === "tile" ? "22.185vw" : "19.85vw")};
    border-radius: 1.001vw;
    margin: ${(props) => (props.$typeShow === "tile" ? "0 0 1.334vw 0" : "0 1.668vw 0 0")};

    span {
      top: 1.334vw;
      right: 1.334vw;
      width: 2.669vw;
      height: 2.669vw;
      border-radius: 0.417vw;

      &:after {
        width: 1.668vw;
        height: 1.668vw;
      }
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$typeShow === "tile" ? "100%" : "42.448vw")};
    height: ${(props) => (props.$typeShow === "tile" ? "34.635vw" : "30.99vw")};
    border-radius: 1.563vw;
    margin: ${(props) => (props.$typeShow === "tile" ? "0 0 2.083vw 0" : "0 2.604vw 0 0")};

    span {
      top: 2.083vw;
      right: 2.083vw;
      width: 4.167vw;
      height: 4.167vw;
      border-radius: 0.651vw;
      &:after {
        width: 2.604vw;
        height: 2.604vw;
      }
    }
  }
`;

const PropertyCardContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  .property_card_text {
    flex: 1 1 auto;
  }
`;

const PropertyComponents = styled.div`
  display: flex;
  align-items: center;
  gap: 1.389vw;
  margin-block: 1.111vw;

  & > div {
    display: flex;
    align-items: center;
    gap: 0.694vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.668vw;
    margin-block: 1.334vw;

    & > div {
      gap: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.604vw;
    margin-block: 2.083vw;
    & > div {
      gap: 1.302vw;
    }
  }
`;

const PropertyCardBottom = styled.div`
  padding-top: 1.111vw;
  border-top: 1px solid ${theme.colors.grayOpacity(0.2)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${theme.media.desktop}px) {
    padding-top: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-top: 2.083vw;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.694vw;
  & > div {
    border-radius: 50%;
    overflow: hidden;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 1.302vw;
  }
`;
