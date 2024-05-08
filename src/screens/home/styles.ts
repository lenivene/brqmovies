import styled from "styled-components/native";

export const NoContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const NoContentText = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};

  font-family: ${({ theme }) => theme.fonts.nunito.regular};
  font-size: 16px;
`;
