"use client";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { LogoApp } from "../logo/LogoApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { HEADER_NAVMENU } from "@/common/constants/mockMenu";
import { NextImage } from "../NextImage";
import iconMenu from "@/assets/icons/icon-menu.svg";
import { HiddenBlock } from "../hiddenBlock/HiddenBlock";
import { Status, USER_KEY } from "@/common/constants/user";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { FlexContent } from "@/common/styledComponents/Flex";
import { deleteCookie, getCookie } from "@/common/helpers/cookie";
import { ModalContext } from "@/common/hoc/ModalProvider";
import { fetcherAuthMe } from "@/services/Auth";
import { IUserResponse } from "@/common/interfaces/IAuth";
import { NotificationContext } from "@/common/hoc/NotificationProvider";

const AuthButtons = ({ width }: { width?: number }) => {
  const [checkUser, setCheckUser] = useState<IUserResponse | null>(null);
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const { onSuccessNotify, onErrorNotify } = useContext(NotificationContext);
  const [isToken, setToken] = useState<string>("");

  const handleDeleteCookie = () => {
    deleteCookie("token");
    localStorage.removeItem(USER_KEY);
    setCheckUser(null);
    onSuccessNotify("Вы вышли из акаунта");
  };

  const handelLogout = () => {
    setOptionModalHandler({
      type: "alert",
      options: {
        title: "Вы действительно хотите выйти",
        textButton: "Выйти",
        buttonHandler: handleDeleteCookie,
      },
    });
    showHandler();
  };

  const registrateUser = (user: IUserResponse) => {
    const userValue = {
      email: user.userData.email,
      userName: `${user.userData.firstName} ${user.userData.lastName}`,
      favouriteObject: user.userData.favouriteObject,
    };

    localStorage.setItem(USER_KEY, JSON.stringify(userValue));
    setCheckUser(user);
  };

  const checkAuthorization = async () => {
    const token = getCookie("token");
    setToken(token || "");
    if (!token) {
      // onErrorNotify("При авторизации произошла ошибка");
      return;
    }

    try {
      const user = await fetcherAuthMe(token);
      registrateUser(user);
    } catch (error) {
      // onErrorNotify("При авторизации произошла ошибка");
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <>
      {checkUser?.status === Status.SUCCESS ? (
        <FlexContent $flexGap={20} $align="center">
          <LinkApp.Button href={`${process.env.NEXT_PUBLIC_ADMIN_API}?token=${isToken}`} width={width}>
            Кабинет
          </LinkApp.Button>
          <ButtonApp width={width} onClick={handelLogout} outlined>
            Выйти
          </ButtonApp>
        </FlexContent>
      ) : (
        <LinkApp.Button href="/auth/login" width={width}>
          Войти
        </LinkApp.Button>
      )}
    </>
  );
};

export const HeaderApp = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("hide");
    } else {
      document.body.classList.remove("hide");
    }
  }, [showMobileMenu]);

  return (
    <HeaderContainer>
      <ContainerApp>
        <HeaderNav>
          <Link href="/">
            <LogoApp size={147.6} />
          </Link>
          <HiddenBlock mode="min" extension={theme.media.tablet}>
            <NextImage
              info={iconMenu}
              $width={48}
              $height={48}
              objectFit="contain"
              style={{ transform: "rotate(180deg)" }}
              onClick={() => setShowMobileMenu((showState) => !showState)}
            />
          </HiddenBlock>

          <MenuList $showMobileMenu={showMobileMenu}>
            {HEADER_NAVMENU.map((itemMenu) => (
              <li key={itemMenu.path}>
                <LinkApp
                  href={itemMenu.path}
                  color={pathname === itemMenu.path ? theme.colors.blue : theme.colors.dark}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {itemMenu.label}
                </LinkApp>
              </li>
            ))}
            <HiddenBlock mode="min" extension={theme.media.tablet}>
              <OverlayMobileMenu onClick={() => setShowMobileMenu(false)} />
              <HiddenBlock mode="min" extension={theme.media.phone}>
                <AuthButtons />
              </HiddenBlock>
            </HiddenBlock>
          </MenuList>
          <HiddenBlock mode="max" extension={theme.media.phone}>
            <AuthButtons width={98} />
          </HiddenBlock>
        </HeaderNav>
      </ContainerApp>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding-block: 1.042vw;
  background-color: ${theme.colors.white};

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding-block: 15px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: 1.668vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 2.604vw;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 2.083vw;

  @media (min-width: ${theme.media.desktopLarge}px) {
    gap: 30px;
  }

  @media (max-width: ${theme.media.desktop}px) {
    gap: 2.502vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 3.906vw;
  }
`;

const OverlayMobileMenu = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 100%;
  right: 0;
  z-index: 10;
  background-color: ${theme.colors.darkOpacity(0.2)};
  backdrop-filter: blur(5px);
  opacity: 0;
  transition: opacity 0.2s ease-in 0.1s;
  width: 100%;
  height: 100vh;
`;

const MenuList = styled.ul<{ $showMobileMenu: boolean }>`
  display: flex;
  align-items: center;

  li {
    position: relative;
    line-height: 1;
  }

  li:not(:first-child) {
    margin-left: 2.083vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    li:not(:first-child) {
      margin-left: 30px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    li:not(:first-child) {
      margin-left: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 13.021vw 13.021vw;
    justify-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 13.021vw;
    z-index: 100;
    background-color: ${theme.colors.white};
    width: 100%;
    height: max-content;
    padding: 3.906vw;

    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;
    pointer-events: none;

    ${(props) =>
      props.$showMobileMenu &&
      css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        & ${OverlayMobileMenu} {
          opacity: 1;
        }
      `}

    li {
      a {
        font-size: 3.125vw;
      }

      &:not(:first-child) {
        margin-left: 0;
      }
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    top: 19.294vw;
    grid-template-rows: 19.294vw 19.294vw;

    li {
      a {
        font-size: 5.647vw;
      }
    }
    & > *:last-child {
      grid-column: 1/3;
      width: 100%;
    }
  }
`;
