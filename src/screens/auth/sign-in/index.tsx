import React, { useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TextInput as NativeTextInput,
  Platform,
} from "react-native";
import Toast from "react-native-root-toast";
import { Controller, useForm } from "react-hook-form";

import { useAuth } from "@hooks/auth";

import logoImage from "@assets/logo.png";
import { UserIcon, TrailingIcon, LeadingIcon } from "@assets/icons";

import {
  Container,
  Logo,
  FormContainer,
  Input,
  ButtonsContainer,
  ButtonSubmit,
  TextButton,
  ButtonForgotPassword,
} from "./styles";

import { authValidator, resolverZod } from "@validators/zod";

type TextInputHandles = Pick<
  NativeTextInput,
  "focus" | "clear" | "blur" | "isFocused" | "setNativeProps"
>;

const DEFAULT_VALUES_FORM = {
  username: "",
  password: "",
};

export const SignInAuthScreen: React.FC = () => {
  const auth = useAuth();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isLoading, errors, isValid },
  } = useForm({
    defaultValues: DEFAULT_VALUES_FORM,
    resolver: resolverZod(authValidator),
  });

  const isDisabledSubmitButton = isSubmitting || isLoading || !isValid;
  const hasErrosInForm = Object.keys(errors)?.length > 0;

  const passwordInputRef = useRef<TextInputHandles>(null);

  const clearInput = (keyName: keyof typeof DEFAULT_VALUES_FORM) => {
    setValue(keyName, "", {
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit = handleSubmit(async (formData) => {
    try {
      Keyboard.dismiss();
      await auth.signIn(formData);
    } catch (error: any) {
      Toast.show(error?.message ?? "Usuário ou senha invalido!", {
        duration: Toast.durations.LONG,
      });
    }
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
    >
      <Container style={{ paddingHorizontal: 16 }}>
        <Logo source={logoImage} />
        <FormContainer>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Usuário"
                iconLeft={<UserIcon />}
                iconRight={
                  <TrailingIcon onPress={() => clearInput("username")} />
                }
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef?.current?.blur();
                }}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            )}
            name="username"
          />
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Senha"
                iconLeft={<LeadingIcon />}
                iconRight={
                  <TrailingIcon
                    onPress={() => {
                      clearInput("password");
                    }}
                  />
                }
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                ref={passwordInputRef as any}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          <ButtonsContainer>
            <ButtonSubmit
              disabled={isDisabledSubmitButton || hasErrosInForm}
              onPress={onSubmit}
            >
              <TextButton>
                {!isDisabledSubmitButton ||
                hasErrosInForm ||
                (!isValid && !hasErrosInForm)
                  ? "Entrar"
                  : "Entrando..."}
              </TextButton>
            </ButtonSubmit>
            <ButtonForgotPassword>
              <TextButton>Esqueci a senha</TextButton>
            </ButtonForgotPassword>
          </ButtonsContainer>
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};
