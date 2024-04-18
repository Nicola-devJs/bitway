"use client";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { usePathname } from "next/navigation";
import React from "react";
import styled from "styled-components";
import arrowRight from "@/assets/icons/arrow-right.svg";
import { theme } from "@/assets/theme/theme";
import { BREADCRUMBS_MENU } from "@/common/constants/mockMenu";

export const Breadcrumbs = () => {
  const pathname: string[] = [];
  usePathname()
    .split("/")
    .forEach((path, id) => {
      if (id % 2 !== 0) {
        pathname.push(">");
      }
      pathname.push("/" + path);
    });

  return (
    <StyledBreadcrumbs>
      {pathname.map((path, id, pathnamesArray) => (
        <React.Fragment key={id}>
          {pathnamesArray.length - 1 === id ? (
            <span>{BREADCRUMBS_MENU[path]}</span>
          ) : path === ">" ? (
            <ArrowRight />
          ) : (
            <LinkApp path={path}>{BREADCRUMBS_MENU[path]}</LinkApp>
          )}
        </React.Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = styled.p`
  padding-block: 3.472vw;

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: 4.17vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 6.51vw;
  }
`;

const ArrowRight = styled.span`
  background-image: url(${arrowRight.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  width: 0.313vw;
  height: 0.66vw;
  margin-inline: 0.556vw;

  @media (max-width: ${theme.media.desktop}px) {
    width: 0.375vw;
    height: 0.792vw;
    margin-inline: 0.667vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: 0.586vw;
    height: 1.237vw;
    margin-inline: 1.042vw;
  }
`;
