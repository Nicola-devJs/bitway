"use client";
import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";
import { playfair } from "@/common/constants/font";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { TextApp } from "@/common/styledComponents/Text";
import locationIcon from "@/assets/icons/location-b.svg";
import { NextImage } from "@/common/components/NextImage";
import { PropertyActions } from "@/common/components/propertyActions/PropertyActions";
import { TabsApp } from "@/common/components/tabs/TabsApp";
import { PropertyDescription } from "./components/PropertyDescription";
import { FormFeedback } from "@/common/components/feedback/FormFeedback";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { IPropertyCard } from "@/common/interfaces/property/property";
import { HiddenBlock } from "@/common/components/hiddenBlock/HiddenBlock";
import { PropertyParams } from "./components/PropertyParams";
import { PropertyFeatured } from "./components/PropertyFeatured";
import { getCookie } from "@/common/helpers/cookie";
import { fetcherSwitchFavourite } from "@/services/Properties";
import { Status, USER_KEY } from "@/common/constants/user";
import { getStorageValue } from "@/common/helpers/storage";
import { IUserStorage } from "@/common/interfaces/IAuth";
import { NotificationContext } from "@/common/hoc/NotificationProvider";

interface IProps {
  property: IPropertyCard;
}

export const PropertyContentPage: FC<IProps> = ({ property }) => {
  const { onSuccessNotify, onErrorNotify } = useContext(NotificationContext);
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const user = getStorageValue<IUserStorage>(USER_KEY);
  const isFavoriteObject = user?.favouriteObject.includes(property._id) ?? false;
  const [isFavourite, setFavourite] = useState(isFavoriteObject);
  const authorName = `${property.user.firstName} ${property.user.lastName}`;

  const FeedBack = <FormFeedback author={authorName} propertyId={property._id} />;

  const toggleFavouriteProperty = async () => {
    const token = getCookie("token");
    if (!token) {
      onErrorNotify("Вы не авторизованы");
      return;
    }

    try {
      const isFavorite = await fetcherSwitchFavourite(property, token);
      if (isFavorite.status === Status.SUCCESS) {
        setFavourite(isFavorite.favouriteValue);
        onSuccessNotify(isFavorite.message);
      }
    } catch (error) {
      onErrorNotify("Ошибка при добавлении в избранное");
    }
  };

  const openModalFormFeedback = () => {
    setOptionModalHandler({
      type: "modal",
      options: { children: FeedBack, width: 700 },
    });
    showHandler();
  };

  const onShareProperty = () => {
    onSuccessNotify("Ссылки на объект скопирована");
  };

  return (
    <ContainerApp>
      <PropertyTopInfo>
        <div>
          <TextApp.Heading as="h3" weight={700} size={30} className={playfair.className}>
            {property?.heading}
          </TextApp.Heading>
          <LocationText>
            <NextImage info={locationIcon} $width={24} $height={24} />
            <TextApp>{property?.location}</TextApp>
          </LocationText>
          <TextApp.Heading size={24}>{property?.price} ₽</TextApp.Heading>
        </div>
        <PropertyTopActionBlock>
          <PropertyActions
            sizeIcon={24}
            sizeWrapper={56}
            gapActions={20}
            isActiveHeart={isFavourite}
            handleFavouriteProperty={toggleFavouriteProperty}
            handleShareProperty={onShareProperty}
          />
          <HiddenBlock mode="min" extension={theme.media.tablet}>
            <ButtonApp onClick={openModalFormFeedback} width={98}>
              Отправить
            </ButtonApp>
          </HiddenBlock>
        </PropertyTopActionBlock>
      </PropertyTopInfo>
      <PropertyContentContainer>
        <TabsApp
          listTabs={[
            {
              title: "Описание",
              content: <PropertyDescription description={property.description} plans={property.plans} />,
            },
            { title: "Параметры", content: <PropertyParams property={property} /> },
            { title: "Особенности", content: <PropertyFeatured property={property} /> },
          ]}
        />
        <HiddenBlock mode="max" extension={theme.media.tablet}>
          {FeedBack}
        </HiddenBlock>
      </PropertyContentContainer>
    </ContainerApp>
  );
};

const PropertyTopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 3.472vw;
  padding-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};

  h3 {
    margin-bottom: 0.833vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin-block: 50px;
    padding-bottom: 20px;

    h3 {
      margin-bottom: 12px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-block: 4.17vw;
    padding-bottom: 1.668vw;

    h3 {
      margin-bottom: 1.001vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-block: 6.51vw;
    padding-bottom: 2.604vw;

    h3 {
      margin-bottom: 1.563vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    flex-direction: column;
  }
`;

const PropertyTopActionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > div:first-child {
    flex: 1 1 auto;
  }

  @media (max-width: ${theme.media.phone}px) {
    flex-direction: row;
    margin-top: 3.765vw;
  }
`;

const LocationText = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.389vw;

  & > div:first-child {
    margin-right: 0.694vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    margin-bottom: 20px;

    & > div:first-child {
      margin-right: 10px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    margin-bottom: 1.668vw;

    & > div:first-child {
      margin-right: 0.834vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    margin-bottom: 2.604vw;

    & > div:first-child {
      margin-right: 1.302vw;
    }
  }
`;

const PropertyContentContainer = styled.div`
  display: grid;
  grid-template-columns: 58% auto;
  grid-column-gap: 2.083vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    grid-column-gap: 30px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    grid-column-gap: 2.083vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    grid-column-gap: 0;
    grid-template-columns: 1fr;
  }
`;

export const PropertyContentBody = styled.div`
  & > div {
    h5 {
      margin-bottom: 1.389vw;
    }

    &:not(:last-child) {
      margin-bottom: 1.389vw;
      padding-bottom: 1.389vw;
      border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
    }
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    & > div {
      h5 {
        margin-bottom: 20px;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
        padding-bottom: 20px;
      }
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    & > div {
      h5 {
        margin-bottom: 1.668vw;
      }

      &:not(:last-child) {
        margin-bottom: 1.668vw;
        padding-bottom: 1.668vw;
        border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
      }
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & > div {
      h5 {
        margin-bottom: 2.604vw;
      }

      &:not(:last-child) {
        margin-bottom: 2.604vw;
        padding-bottom: 2.604vw;
        border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
      }
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & > div {
      h5 {
        margin-bottom: 4.706vw;
      }

      &:not(:last-child) {
        margin-bottom: 4.706vw;
        padding-bottom: 4.706vw;
        border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};
      }
    }
  }
`;

export const PropertyContentBlock = styled.div`
  & p:not(:last-child) {
    margin-bottom: 1.389vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    & p:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    & p:not(:last-child) {
      margin-bottom: 1.668vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & p:not(:last-child) {
      margin-bottom: 2.604vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & p:not(:last-child) {
      margin-bottom: 4.706vw;
    }
  }
`;
