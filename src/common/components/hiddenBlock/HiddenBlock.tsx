import { theme } from "@/assets/theme/theme";
import { FC } from "react";
import styled, { css } from "styled-components";

type HiddenModeType = "min" | "max";

interface IProps {
  children: React.ReactNode;
  mode: HiddenModeType;
  extension: number;
}

export const HiddenBlock: FC<IProps> = ({ children, mode, extension }) => {
  return (
    <HiddenBlockStyled $hiddenMode={mode} $ext={extension}>
      {children}
    </HiddenBlockStyled>
  );
};

const HiddenBlockStyled = styled.div<{ $hiddenMode: HiddenModeType; $ext: number }>`
  ${(props) =>
    props.$hiddenMode === "min"
      ? css`
          @media (min-width: ${props.$ext}px) {
            display: none !important;
            pointer-events: none !important;
          }
        `
      : props.$hiddenMode === "max"
      ? css`
          @media (max-width: ${props.$ext}px) {
            display: none !important;
            pointer-events: none !important;
          }
        `
      : null}
`;
