import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral};
  justify-content: space-between;
  flex-direction: row;
  padding: ${Platform.OS === "ios" ? 74 : 54}px 16px 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.nunito.regular};
  font-size: 22px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonMenu = styled.TouchableOpacity<{ isOpen: boolean }>`
  background-color: ${({ theme, isOpen }) => isOpen ? theme.colors?.primary : 'transparent'};
  border-radius: 100px;
  height: 24px;
  width: 24px;

  flex-direction: column;
  align-content: center;
  align-items: center;

  padding: 4px 0px 0px;
`;

export const ItemMenuContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral};
  flex-direction: row;
  padding: 10px 24px;
  gap: 8px;
`;

export const LabelItemMenu = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};

  font-family: ${({ theme }) => theme.fonts.nunito.regular};
  font-size: 20px;
`;
