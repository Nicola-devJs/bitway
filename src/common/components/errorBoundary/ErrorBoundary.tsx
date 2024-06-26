import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { playfair } from "@/common/constants/font";
import { FlexContent } from "@/common/styledComponents/Flex";
import { TextApp } from "@/common/styledComponents/Text";
import error from "next/error";
import React, { FC } from "react";

interface IProps {
  name: string;
  message: string;
  handelReset: () => void;
}

export const ErrorBoundaryApp: FC<IProps> = ({ message, handelReset, name }) => {
  return (
    <FlexContent $flexType="column" $align="center" $justify="center" style={{ marginBlock: 50 }}>
      <TextApp.Heading size={60} as="h1" className={playfair.className}>
        {name}
      </TextApp.Heading>
      <TextApp size={24} style={{ marginBottom: "20px" }}>
        {message}
      </TextApp>
      <ButtonApp onClick={handelReset} width={180}>
        Refresh
      </ButtonApp>
    </FlexContent>
  );
};
