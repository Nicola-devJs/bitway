"use client";
import { theme } from "@/assets/theme/theme";
import { TextApp } from "@/common/styledComponents/Text";
import React, { FC, useContext } from "react";
import { useController, useForm } from "react-hook-form";
import styled from "styled-components";
import { NextImage } from "../NextImage";
import agentAvatar from "@/assets/images/main-img.jpg";
import { playfair } from "@/common/constants/font";
import { InputApp } from "@/common/UI/input/InputApp";
import { ButtonApp } from "@/common/UI/button/ButtonApp";
import { validateEmail, validateName, validatePhone } from "@/common/constants/validation";
import { LinkApp } from "@/common/UI/link/LinkApp";

import { ModalContext } from "@/common/hoc/ModalProvider";
import { fetcherSendMessage } from "@/services/User";
import { getStorageValue } from "@/common/helpers/storage";
import { USER_KEY } from "@/common/constants/user";
import { IUserStorage } from "@/common/interfaces/IAuth";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IProps {
  author: string;
  propertyId: string;
  telegram?: string;
  whatsapp?: string;
}

export const FormFeedback: FC<IProps> = ({ author, propertyId, telegram, whatsapp }) => {
  const { showHandler, setOptionModalHandler } = useContext(ModalContext);
  const { handleSubmit, control, reset } = useForm<FormValues>({ mode: "onBlur" });
  const user = getStorageValue<IUserStorage>(USER_KEY);

  const { field: name, fieldState: nameState } = useController({
    control,
    name: "name",
    rules: validateName(),
    defaultValue: user?.userName ?? "",
  });

  const { field: email, fieldState: emailState } = useController({
    control,
    name: "email",
    rules: validateEmail(),
    defaultValue: user?.email ?? "",
  });

  const { field: phone, fieldState: phoneState } = useController({
    control,
    name: "phone",
    rules: validatePhone(),
  });

  const { field: message, fieldState: messageState } = useController({
    control,
    name: "message",
    rules: {
      required: { value: true, message: "Обязательное поле" },
      maxLength: { value: 180, message: "Слишком большое сообщение" },
    },
  });

  const sendMessageHandler = async (data: FormValues) => {
    try {
      await fetcherSendMessage(propertyId, data);

      await setOptionModalHandler({
        type: "alert",
        options: {
          title: "Отправка сообщения выполнилась успешно",
          text: "Ваш запрос обработается в течении одного рабочего дня, мы с вами свяжемся :)",
          textButton: "Закрыть",
        },
      });
      showHandler();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  console.log(telegram);

  return (
    <StyledFormFeedback>
      <TextApp.Heading>Напишите автору объявления</TextApp.Heading>
      <AgentInfoBlock>
        <NextImage info={agentAvatar} $width={70} $height={70} />
        <div>
          <TextApp.Heading size={24} className={playfair.className}>
            {author}
          </TextApp.Heading>
          <TextApp color={theme.colors.gray}>Собственник</TextApp>
        </div>
      </AgentInfoBlock>
      <FormFeedbackBlock>
        <InputApp
          label="Имя"
          placeholder="Введите ваше имя"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          errorMessage={nameState.error?.message}
        />
        <InputApp
          placeholder="Введите ваш email"
          type="email"
          label="Email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          errorMessage={emailState.error?.message}
        />
        <InputApp.Phone
          placeholder="Введите ваш телефон"
          label="Телефон"
          value={phone.value}
          onChange={phone.onChange}
          onBlur={phone.onBlur}
          errorMessage={phoneState.error?.message}
        />
        <InputApp.Text
          placeholder="Напишите ваше сообщение"
          label="Сообщение"
          value={message.value}
          onChange={message.onChange}
          onBlur={message.onBlur}
          errorMessage={messageState.error?.message}
        />
        <ButtonApp onClick={handleSubmit(sendMessageHandler)}>Отправить</ButtonApp>
        {(telegram || whatsapp) && (
          <CommunicationBlock>
            {telegram && (
              <LinkApp.Button href={`${telegram}?text=${message.value}`} outlined icon="telegram">
                Telegram
              </LinkApp.Button>
            )}

            {whatsapp && (
              <LinkApp.Button href={`${whatsapp}?text=${message.value}`} outlined icon="whatsapp">
                Whatsapp
              </LinkApp.Button>
            )}
          </CommunicationBlock>
        )}
      </FormFeedbackBlock>
    </StyledFormFeedback>
  );
};

const StyledFormFeedback = styled.div`
  width: 100%;
  padding: 1.389vw;
  border-radius: 1.111vw;
  background-color: ${theme.colors.white};
  box-shadow: 1px 2px 4px ${theme.colors.grayOpacity(0.2)}, -2px -4px 4px ${theme.colors.grayOpacity(0.2)};
  height: max-content;

  & > h5 {
    margin-bottom: 2.083vw;
  }

  @media (min-width: ${theme.media.desktopLarge}px) {
    padding: 20px;
    border-radius: 16px;

    & > h5 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding: 1.668vw;
    border-radius: 1.334vw;

    & > h5 {
      margin-bottom: 2.502vw;
    }
  }
  @media (max-width: ${theme.media.tablet}px) {
    box-shadow: none;
    padding: 0;
    padding: 2.604vw;
    border-radius: 2.083vw;

    & > h5 {
      margin-bottom: 3.906vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    padding: 0;
    border-radius: 0;

    & > h5 {
      margin-bottom: 7.059vw;
    }
  }
`;

const AgentInfoBlock = styled.div`
  display: flex;
  padding-bottom: 1.389vw;
  margin-bottom: 1.389vw;
  border-bottom: 1px solid ${theme.colors.grayOpacity(0.2)};

  & > div:first-child {
    border-radius: 0.694vw;
    overflow: hidden;
    margin-right: 1.111vw;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: ${theme.media.desktop}px) {
    padding-bottom: 1.668vw;
    margin-bottom: 1.668vw;

    & > div:first-child {
      border-radius: 0.834vw;
      margin-right: 1.334vw;
    }
  }
  @media (max-width: ${theme.media.tablet}px) {
    padding-bottom: 2.604vw;
    margin-bottom: 2.604vw;

    & > div:first-child {
      border-radius: 1.302vw;
      margin-right: 2.083vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    padding-bottom: 4.706vw;
    margin-bottom: 4.706vw;

    & > div:first-child {
      border-radius: 2.353vw;
      margin-right: 3.765vw;
    }
  }
`;

const FormFeedbackBlock = styled.form`
  & > *:not(:last-child) {
    margin-bottom: 1.389vw;
  }

  @media (max-width: ${theme.media.desktop}px) {
    & > *:not(:last-child) {
      margin-bottom: 1.668vw;
    }
  }

  @media (max-width: ${theme.media.tablet}px) {
    & > *:not(:last-child) {
      margin-bottom: 2.604vw;
    }
  }

  @media (max-width: ${theme.media.phone}px) {
    & > *:not(:last-child) {
      margin-bottom: 4.706vw;
    }
  }
`;

const CommunicationBlock = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr;

  grid-gap: 0.694vw;
  @media (max-width: ${theme.media.desktop}px) {
    grid-gap: 0.834vw;
  }

  @media (max-width: ${theme.media.tablet}px) {
    grid-gap: 1.302vw;
  }

  @media (max-width: ${theme.media.phone}px) {
    grid-gap: 2.353vw;
  }
`;
