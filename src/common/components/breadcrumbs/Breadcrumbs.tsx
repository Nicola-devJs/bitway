"use client";
import { LinkApp } from "@/common/UI/link/LinkApp";
import { usePathname } from "next/navigation";
import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import arrowRight from "@/assets/icons/arrow-right.svg";
import arrowRightWhite from "@/assets/icons/arrow-right-w.svg";
import { theme } from "@/assets/theme/theme";
import { BREADCRUMBS_MENU } from "@/common/constants/mockMenu";

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  color?: string;
}

export const Breadcrumbs: FC<IProps> = ({ color = theme.colors.dark, ...props }) => {
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
    <StyledBreadcrumbs $color={color} {...props}>
      {pathname.map((path, id, pathnamesArray) => (
        <React.Fragment key={id}>
          {pathnamesArray.length - 1 === id ? (
            <span>{BREADCRUMBS_MENU[path]}</span>
          ) : path === ">" ? (
            <ArrowRight />
          ) : (
            <LinkApp href={path} color={color}>
              {BREADCRUMBS_MENU[path]}
            </LinkApp>
          )}
        </React.Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

const ArrowRight = styled.span`
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

  @media (max-width: ${theme.media.phone}px) {
    width: 1.059vw;
    height: 2.235vw;
    margin-inline: 1.882vw;
  }
`;

const StyledBreadcrumbs = styled.p<{ $color: string }>`
  padding-block: 3.472vw;

  color: ${(props) => props.$color};

  span,
  a {
    color: ${(props) => props.$color};
  }

  ${ArrowRight} {
    background-image: url(${(props) => (props.$color === theme.colors.dark ? arrowRight.src : arrowRightWhite.src)});
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-block: 4.17vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    padding-block: 6.51vw;
  }
`;
