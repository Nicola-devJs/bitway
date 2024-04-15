"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { LogoApp } from "../logo/LogoApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { HEADER_NAVMENU } from "@/common/constants/mockMenu";

export const HeaderApp = () => {
  return (
    <HeaderContainer>
      <ContainerApp>
        <HeaderNav>
          <Link href="/">
            <LogoApp size={147.6} />
          </Link>

          <MenuList>
            {HEADER_NAVMENU.map((itemMenu) => (
              <li key={itemMenu.path}>
                <LinkApp path={itemMenu.path}>{itemMenu.label}</LinkApp>
              </li>
            ))}
          </MenuList>
          <Link href="/auth">
            <ButtonApp paddingBlock={13.5} width={98}>
              Login
            </ButtonApp>
          </Link>
        </HeaderNav>
      </ContainerApp>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding-block: 1.389vw;
  background-color: ${theme.colors.white};

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
  gap: 2.083vw;

  @media (max-width: ${theme.media.desktop}px) {
    gap: 2.502vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    gap: 3.906vw;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;

  li {
    position: relative;
    line-height: 1;
  }

  li:not(:first-child) {
    margin-left: 2.083vw;
  }

  li::after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: black;
    position: absolute;
    left: 0;
    bottom: -1px;
    transition: width 0.2s linear;
  }

  li:hover::after {
    width: 100%;
  }

  @media (max-width: ${theme.media.desktop}px) {
    li:not(:first-child) {
      margin-left: 2.502vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    li:not(:first-child) {
      margin-left: 3.906vw;
    }
  }
`;
