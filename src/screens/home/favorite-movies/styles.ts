import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral};
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  width: 100%;
  flex: 1;
`;