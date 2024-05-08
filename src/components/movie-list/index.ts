import styled from "styled-components/native";

export const MovieList = styled.FlatList.attrs((props) => ({
  ...props,
  numColumns: 2,
  contentContainerStyle: { gap: 24, flexGrow: 1 },
  columnWrapperStyle: { gap: 16 },
}))`
  width: 100%;
  padding: 0px 16px;
`;
