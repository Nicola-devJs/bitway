"use client";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import styled from "styled-components";
import { LogoApp } from "../logo/LogoApp";
import { TextApp } from "@/common/styledComponents/Text";
import twitter from "@/assets/icons/twitter.svg";
import facebook from "@/assets/icons/facebook.svg";
import linkedln from "@/assets/icons/linkedln.svg";
import { FOOTER_NAVMENU } from "@/common/constants/mockMenu";
import { LinkApp } from "@/common/UI/link/LinkApp";

export const FooterApp = () => {
  return (
    <FooterContainer>
      <ContainerApp>
        <FooterColumns>
          <Column>
            <LogoApp isWhite size={123} />
            <TextApp color={theme.colors.white}>
              Nest Haven – это веб-сервис, предоставляющий пользователям возможность поиска, просмотра и взаимодействия
              с недвижимостью. Основные функции включают поиск недвижимости по различным параметрам, просмотр подробной
              информации об объектах, добавление объектов в избранное и многое другое.
            </TextApp>
          </Column>
          {FOOTER_NAVMENU.map((itemMenu) => (
            <Column key={itemMenu.label}>
              <TextApp.Heading color={theme.colors.white}>{itemMenu.label}</TextApp.Heading>
              <ListMenu>
                {itemMenu.childs.map((child) => (
                  <li key={child.path}>
                    <LinkApp href={child.path} color={theme.colors.white}>
                      {child.label}
                    </LinkApp>
                  </li>
                ))}
              </ListMenu>
            </Column>
          ))}
          <Column>
            <TextApp.Heading color={theme.colors.white}>Место положения</TextApp.Heading>
            <TextApp color={theme.colors.white}>Приднестровье г. Тирасполь, ул. Чеканая, 179 (б)</TextApp>
            <ContainerSocialIcons>
              <SocialIcon $href={twitter.src} />
              <SocialIcon $href={facebook.src} />
              <SocialIcon $href={linkedln.src} />
            </ContainerSocialIcons>
          </Column>
        </FooterColumns>
        <FooterBottom>
          <span>Copyright 2024 PMR. All Rights Reserved</span>
          <div>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </FooterBottom>
      </ContainerApp>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding-block: 2.083vw;
  background-color: ${theme.colors.blue};

  @media (min-width: ${theme.media.desktopLarge}px) {
    grid-column-gap: 30px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: 2.502vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 3.906vw;
  }
`;

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: 30.6% 15.2% 28.4%;
  grid-column-gap: 3.472vw;
  justify-content: space-between;

  @media (min-width: ${theme.media.desktopLarge}px) {
    grid-column-gap: 50px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    grid-column-gap: 4.17vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 6.51vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    grid-template-columns: 1fr;
    gap: 7.059vw;
    padding-block: 4.706vw;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.whiteOpacity(0.2)};
  padding-top: 1.389vw;
  margin-top: 2.083vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.white};

  & > div {
    display: flex;
    align-items: center;
    gap: 2.083vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-top: 20px;
    margin-top: 30px;

    & > div {
      gap: 30px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-top: 1.668vw;
    margin-top: 2.502vw;

    & > div {
      gap: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-top: 2.604vw;
    margin-top: 3.906vw;

    & > div {
      gap: 3.906vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    flex-direction: column;
    padding-top: 4.706vw;
    margin-top: 7.059vw;
    gap: 7.059vw;

    & > div {
      gap: 7.059vw;
    }
  }
`;

const Column = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1.389vw;

    @media (min-width: ${theme.media.desktopLarge}px) {
      margin-bottom: 20px;
    }

    @media (max-width: ${theme.media.desktop}px) {
      margin-bottom: 1.668vw;
    }

    @media (max-width: ${theme.media.tablet}px) {
      margin-bottom: 2.604vw;
    }

    @media (max-width: ${theme.media.phone}px) {
      margin-bottom: 4.706vw;
    }
  }
`;

const ContainerSocialIcons = styled.div`
  display: flex;
  gap: 1.111vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 16px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 1.334vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 2.083vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    gap: 3.765vw;
  }
`;

const SocialIcon = styled.div<{ $href: string }>`
  width: 3.333vw;
  height: 3.333vw;
  border-radius: 50%;
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    background-image: ${(props) => `url(${props.$href})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 1.667vw;
    height: 1.667vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    width: 48px;
    height: 48px;

    &:before {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: 4.003vw;
    height: 4.003vw;

    &:before {
      width: 2.002vw;
      height: 2.002vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 6.25vw;
    height: 6.25vw;

    &:before {
      width: 3.125vw;
      height: 3.125vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    width: 11.294vw;
    height: 11.294vw;

    &:before {
      width: 5.647vw;
      height: 5.647vw;
    }
  }
`;

const ListMenu = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 1.111vw;

    @media (min-width: ${theme.media.desktopLarge}px) {
      margin-bottom: 16px;
    }

    @media (max-width: ${theme.media.desktop}px) {
      margin-bottom: 1.334vw;
    }

    @media (max-width: ${theme.media.tablet}px) {
      margin-bottom: 2.083vw;
    }

    @media (max-width: ${theme.media.phone}px) {
      margin-bottom: 3.765vw;
    }
  }
`;
