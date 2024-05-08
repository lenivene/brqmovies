import { TouchableOpacityProps } from "react-native";

import { ButtonWrapper, Container, Poster } from "./styles";
import { ButtonHeader } from "@screens/single-details/styles";
import { HeartIcon } from "@assets/icons/heart";
import { useTheme } from "styled-components";
import { useMovie } from "@hooks/movie";

export type Props = TouchableOpacityProps & {
  isFavorite?: boolean;
  data: IPopularMovies;
};

export const ItemCardMovie: ReactFC<Props> = ({
  data,
  isFavorite = false,
  ...rest
}) => {
  const theme = useTheme();
  const { removeFavoriteMovieById } = useMovie();

  return (
    <Container testID="item-card-movie-container" activeOpacity={0.9} {...rest}>
      {isFavorite && (
        <ButtonWrapper>
          <ButtonHeader
            onPress={() => {
              removeFavoriteMovieById(data.id);
            }}
          >
            <HeartIcon color={theme.colors.danger} />
          </ButtonHeader>
        </ButtonWrapper>
      )}
      <Poster
        source={{ uri: `https://image.tmdb.org/t/p/w400${data.poster_path}` }}
      />
    </Container>
  );
};
