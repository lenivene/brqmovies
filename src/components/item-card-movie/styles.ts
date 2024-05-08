import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: relative;
  max-width: 50%;
  gap: 10px;
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 1;
`;

export const Poster = styled.Image`
  height: 280px;
  width: 100%;

  border-radius: 8px;
  object-fit: cover;
`;
