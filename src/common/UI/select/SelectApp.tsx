import React, { FC, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "@/assets/theme/theme";
import { jost } from "@/common/constants/font";
import { transformAdaptiveSize } from "@/common/helpers/adaptiveSize";
import { ErrorMessage } from "@/common/styledComponents/ErrorMessage";
import { TextApp } from "@/common/styledComponents/Text";
import arrowSelect from "@/assets/icons/arrow-select.svg";
import { NextImage } from "@/common/components/NextImage";

type OptionType = { label: string; value: string | number };

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  options?: OptionType[];
}

export const SelectApp: FC<IProps> = ({ label, errorMessage, options = [], ...props }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState<OptionType>();
  const selectRef = useRef<HTMLDivElement>(null);

  const openSelectHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setOpenSelect(true);
  };

  const closeSelectOptions = (ev: any) => {
    if (!selectRef.current!.contains(ev.target)) {
      setOpenSelect(false);
    }
  };

  const selectHandler = (option: OptionType) => () => {
    setSelected(option);
    setOpenSelect(false);
  };

  useEffect(() => {
    document.addEventListener("click", closeSelectOptions);

    return () => {
      document.removeEventListener("click", closeSelectOptions);
    };
  }, []);

  return (
    <ContainerSelect ref={selectRef}>
      <ContainerInput $isOpen={openSelect}>
        {label && (
          <TextApp as="label" size={12} weight={500}>
            {label}
          </TextApp>
        )}
        <StyledInput
          type="text"
          className={jost.className}
          $error={!!errorMessage}
          onMouseDown={openSelectHandler}
          value={selected?.label || "Не выбран"}
          readOnly
          {...props}
        />
        <NextImage info={arrowSelect} $width={17} onClick={() => setOpenSelect((prev) => !prev)} />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ContainerInput>
      <ContainerOptions $isOpen={openSelect}>
        {options.length ? (
          options.map((opt) => (
            <div key={opt.value} onClick={selectHandler(opt)}>
              {opt.label}
            </div>
          ))
        ) : (
          <div>Пустой список</div>
        )}
      </ContainerOptions>
    </ContainerSelect>
  );
};

const ContainerSelect = styled.div`
  position: relative;
  width: 100%;
`;

export const ContainerInput = styled.div<{ $isOpen: boolean }>`
  position: relative;
  label {
    margin-bottom: 0.347vw;
    display: inline-block;
  }

  div {
    position: absolute;
    right: 1.597vw;
    top: 3.333vw;
    cursor: pointer;
    transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
    transition: transform 0.2s ease-in;
  }

  @media (max-width: ${theme.media.desktop}px) {
    label {
      margin-bottom: 0.417vw;
    }

    div {
      top: 4.003vw;
      right: 1.918vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    label {
      margin-bottom: 0.651vw;
    }

    div {
      top: 6.25vw;
      right: 2.995vw;
    }
  }
`;

export const StyledInput = styled.input<{ $error?: boolean; $size?: number; $width?: number }>`
  width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width) : "100%")};
  border: 1px solid ${(props) => (props.$error ? theme.colors.red : theme.colors.lightGray)};
  padding: 0.903vw 1.389vw;
  border-radius: 0.694vw;
  color: ${theme.colors.dark};
  font-weight: 500;
  font-size: ${(props) => (props.$size ? transformAdaptiveSize(props.$size) : transformAdaptiveSize(16))};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  @media (max-width: ${theme.media.desktop}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.desktop) : "100%")};
    padding: 1.084vw 1.668vw;
    font-size: ${(props) =>
      props.$size
        ? transformAdaptiveSize(props.$size, theme.media.desktop)
        : transformAdaptiveSize(16, theme.media.desktop)};
    border-radius: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    width: ${(props) => (props.$width ? transformAdaptiveSize(props.$width, theme.media.tablet) : "100%")};
    padding: 1.693vw 2.604vw;
    font-size: ${(props) =>
      props.$size
        ? transformAdaptiveSize(props.$size, theme.media.tablet)
        : transformAdaptiveSize(16, theme.media.tablet)};
    border-radius: 1.302vw;
  }
`;

const ContainerOptions = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.694vw);
  left: 0;
  right: 0;
  z-index: 2;
  border-radius: 0.694vw;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.lightGray};
  padding-block: 0.694vw;
  transform: ${(props) => (props.$isOpen ? "translateY(0px)" : "translateY(-10px)")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  height: ${(props) => (props.$isOpen ? "auto" : "0px")};
  transition: all 0.2s ease-in-out;

  & > div {
    padding: 0.903vw 1.389vw;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.lightGrayOpacity(0.1)};
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    top: calc(100% + 0.834vw);
    border-radius: 0.834vw;
    padding-block: 0.834vw;

    & > div {
      padding: 1.084vw 1.668vw;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    top: calc(100% + 1.302vw);
    border-radius: 1.302vw;
    padding-block: 1.302vw;

    & > div {
      padding: 1.693vw 2.604vw;
    }
  }
`;
