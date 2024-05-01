"use client";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { theme } from "@/assets/theme/theme";
import { ContainerApp } from "@/common/styledComponents/ContainerApp";
import { LogoApp } from "../logo/LogoApp";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { HEADER_NAVMENU } from "@/common/constants/mockMenu";

export const HeaderApp = () => {
  const pathname = usePathname();
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
                <LinkApp
                  href={itemMenu.path}
                  color={pathname === itemMenu.path ? theme.colors.blue : theme.colors.dark}
                >
                  {itemMenu.label}
                </LinkApp>
              </li>
            ))}
          </MenuList>
          <LinkApp.Button href="/auth/login" width={98}>
            Login
          </LinkApp.Button>
        </HeaderNav>
      </ContainerApp>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  padding-block: 1.042vw;
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
