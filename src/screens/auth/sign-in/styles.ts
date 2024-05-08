import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input as InputComponent } from "@components/input";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.neutral};
  align-items: center;
  padding: 16px;
  flex: 1;
`;

export const Logo = styled.Image`
  height: 224px;
  width: 224px;
`;

export const FormContainer = styled.View`
  flex-direction: column;
  width: 100%;
  gap: 48px;
  flex: 1;
`;

export const Input = styled(InputComponent)`
  background-color: #49454f;
  width: 100%;
`;

export const ButtonsContainer = styled.View`
  flex-direction: column;
  gap: 16px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 100px;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.grey};
    `}
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
