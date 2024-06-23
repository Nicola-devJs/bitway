"use client";
import { theme } from "@/assets/theme/theme";
import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { NextImage } from "../NextImage";
import cardImg from "@/assets/images/main-img.jpg";
import { TextApp } from "@/common/styledComponents/Text";
import { playfair } from "@/common/constants/font";
import { propertyCardIconsBlack } from "@/common/constants/constantImages";
import iconFavoriteBorder from "@/assets/icons/property-card/favorite_border.svg";
import iconFavorite from "@/assets/icons/property-card/favorite.svg";
import iconLoupe from "@/assets/icons/property-card/loupe.svg";
import { ShowType } from "../listProperties/ListProperties";
import { PropertyActions } from "../propertyActions/PropertyActions";
import { IPropertyCard } from "@/common/interfaces/property/property";
import { ModalContext } from "@/common/hoc/ModalProvider";
import mockImage from "@/assets/images/main-img.jpg";
import { fetcherSwitchFavourite } from "@/services/Properties";
import { getCookie } from "@/common/helpers/cookie";
import { Status, USER_KEY } from "@/common/constants/user";
import { getStorageValue } from "@/common/helpers/storage";
import { IUserStorage } from "@/common/interfaces/IAuth";
import { NotificationContext } from "@/common/hoc/NotificationProvider";

interface IProps {}

const iconComponents = [
  { icon: "bed", count: 2 },
  { icon: "bath", count: 1 },
  { icon: "car", count: 2 },
];

interface IProps {
  typeShow: ShowType;
  property: IPropertyCard;
}

// TODO Добавить в оповещение после добавления / удаления избранных

export const PropertyCard: FC<IProps> = ({ typeShow, property }) => {
  const { addNotification } = useContext(NotificationContext);
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const user = getStorageValue<IUserStorage>(USER_KEY);
  const isFavoriteObject = Boolean(user?.favouriteObject.includes(property._id));

  const [isFavourite, setFavourite] = useState(isFavoriteObject);
  const openModalGalleryHandler = () => {
    setOptionModalHandler({ type: "gallery", options: { images: property.photos, initialPosition: 0 } });
    showHandler();
  };

  const toggleFavouriteProperty = async () => {
    const token = getCookie("token");
    if (!token) {
      return;
    }

    const isFavorite = await fetcherSwitchFavourite(property, token);
    if (isFavorite.status === Status.SUCCESS) {
      setFavourite(isFavorite.favouriteValue);
      addNotification({ text: isFavorite.message, type: Status.SUCCESS });
    }
  };

  return (
    <PropertyCardContainer $typeShow={typeShow}>
      <ContainerImage $typeShow={typeShow}>
        <Link href={`/properties/${property._id}`}>
          <NextImage info={property.photos[0] || mockImage} $fullWidth />
        </Link>
        <div className="container-icon heart" onClick={toggleFavouriteProperty}>
          <NextImage
            info={isFavourite ? iconFavorite : iconFavoriteBorder}
            $width={20}
            $height={20}
            objectFit="contain"
          />
        </div>
        {property.photos.length > 1 && (
          <div className="container-icon loupe" onClick={openModalGalleryHandler}>
            <NextImage info={iconLoupe} $width={20} $height={20} objectFit="contain" />
          </div>
        )}
      </ContainerImage>
      <PropertyCardContent>
        <Link href={`/properties/${property._id}`}>
          <PropertyCardHeading className={playfair.className} size={24} weight={700}>
            {property.heading}
          </PropertyCardHeading>
        </Link>
        <TextApp size={20}>${property.price}</TextApp>
        <PropertyCardDescription color={theme.colors.gray} className="property_card_text">
          {property.description}
        </PropertyCardDescription>
        <PropertyComponents>
          {iconComponents.map((comp) => (
            <div key={comp.icon}>
              <NextImage info={propertyCardIconsBlack[comp.icon]} $width={24} /> <span>{comp.count}</span>
            </div>
          ))}
        </PropertyComponents>
        <PropertyCardBottom>
          <Profile>
            <NextImage info={cardImg} $width={34} $height={34} />
            <TextApp>
              {property.user.firstName} {property.user.lastName}
            </TextApp>
          </Profile>
          <PropertyActions
            gapActions={8}
            sizeIcon={18}
            sizeWrapper={34}
            handleFavouriteProperty={toggleFavouriteProperty}
            isActiveHeart={isFavourite}
          />
        </PropertyCardBottom>
      </PropertyCardContent>
    </PropertyCardContainer>
  );
};

const PropertyCardContainer = styled.article<{ $typeShow: ShowType }>`
  background-color: ${theme.colors.white};
  width: 100%;
  height: 100%;
  border-radius: 1.111vw;
  padding: 1.389vw;
  display: flex;
  flex-direction: ${(props) => (props.$typeShow === "tile" ? "column" : "row")};
  box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.02);

  h5,
  p {
    margin-bottom: 0.694vw;

    &.property_card_text {
      margin-bottom: 0;
    }
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    border-radius: 16px;
    padding: 20px;

    h5,
    p {
      margin-bottom: 10px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    h5,
    p {
      margin-bottom: 0.834vw;
    }

    border-radius: 1.334vw;
    padding: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    h5,
    p {
      margin-bottom: 1.302vw;
    }

    border-radius: 2.083vw;
    padding: 2.604vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    h5,
    p {
      margin-bottom: 2.353vw;
    }

    border-radius: 3.765vw;
    padding: 4.706vw;
  }
`;

const ContainerImage = styled.div<{ $typeShow: ShowType }>`
  min-width: ${(props) => (props.$typeShow === "tile" ? "100%" : "22.639vw")};
  height: ${(props) => (props.$typeShow === "tile" ? "18.472vw" : "16.528vw")};
  border-radius: 0.833vw;
  margin: ${(props) => (props.$typeShow === "tile" ? "0 0 1.111vw 0" : "0 1.389vw 0 0")};
  background-image: url(${mockImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  position: relative;

  a {
    height: inherit;
  }

  .container-icon {
    position: absolute;
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

    &.heart {
      top: 1.111vw;
    }
    &.loupe {
      opacity: 0.5;
      bottom: 1.111vw;
    }
  }

  &:hover .container-icon {
    opacity: 1;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: ${(props) => (props.$typeShow === "tile" ? "100%" : "326px")};
    height: ${(props) => (props.$typeShow === "tile" ? "266px" : "238px")};
    border-radius: 0.833vw;
    margin: ${(props) => (props.$typeShow === "tile" ? "0 0 16px 0" : "0 20px 0 0")};

    .container-icon {
      right: 16px;
      width: 32px;
      height: 32px;
      border-radius: 5px;

      &.heart {
        top: 16px;
      }
      &.loupe {
        bottom: 16px;
      }
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$typeShow === "tile" ? "100%" : "27.189vw")};
    height: ${(props) => (props.$typeShow === "tile" ? "22.185vw" : "19.85vw")};
    border-radius: 1.001vw;
    margin: ${(props) => (props.$typeShow === "tile" ? "0 0 1.334vw 0" : "0 1.668vw 0 0")};

    .container-icon {
      right: 1.334vw;
      width: 2.669vw;
      height: 2.669vw;
      border-radius: 0.417vw;

      &.heart {
        top: 1.334vw;
      }
      &.loupe {
        bottom: 1.334vw;
      }
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$typeShow === "tile" ? "100%" : "42.448vw")};
    height: ${(props) => (props.$typeShow === "tile" ? "34.635vw" : "30.99vw")};
    border-radius: 1.563vw;
    margin: ${(props) => (props.$typeShow === "tile" ? "0 0 2.083vw 0" : "0 2.604vw 0 0")};

    .container-icon {
      right: 2.083vw;
      width: 4.167vw;
      height: 4.167vw;
      border-radius: 0.651vw;

      &.heart {
        top: 2.083vw;
      }
      &.loupe {
        bottom: 2.083vw;
      }
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    width: ${(props) => (props.$typeShow === "tile" ? "100%" : "76.706vw")};
    height: ${(props) => (props.$typeShow === "tile" ? "62.588vw" : "56vw")};
    border-radius: 1.563vw;
    margin: ${(props) => (props.$typeShow === "tile" ? "0 0 3.765vw 0" : "0 4.706vw 0 0")};

    .container-icon {
      right: 3.765vw;
      width: 7.529vw;
      height: 7.529vw;
      border-radius: 1.176vw;

      &.heart {
        top: 3.765vw;
      }
      &.loupe {
        bottom: 3.765vw;
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

const PropertyCardHeading = styled(TextApp.Heading)`
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PropertyCardDescription = styled(TextApp)`
  max-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 20px;
    margin-block: 16px;

    & > div {
      gap: 10px;
    }
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

  @media (max-width: ${theme.media.phone}px) {
    gap: 4.706vw;
    margin-block: 3.765vw;
    & > div {
      gap: 2.353vw;
    }
  }
`;

const PropertyCardBottom = styled.div`
  padding-top: 1.111vw;
  border-top: 1px solid ${theme.colors.grayOpacity(0.2)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-top: 16px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-top: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-top: 2.083vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-top: 3.765vw;
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

  & > p {
    margin-bottom: 0;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 10px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 1.302vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    gap: 2.353vw;
  }
`;
