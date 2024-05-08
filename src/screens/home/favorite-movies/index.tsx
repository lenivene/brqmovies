import React, { useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useMovie } from "@hooks/movie";

import { MovieList } from "@components/movie-list";
import { ItemCardMovie } from "@components/item-card-movie";

import { IHomeTabsRoutersProps } from "@routers/types";
import { NoContentContainer, NoContentText } from "../styles";
import { Container } from "./styles";

export const FavoriteMoviesHomeScreen: ReactFC = () => {
  const { navigate } = useNavigation<IHomeTabsRoutersProps>();

  const insets = useSafeAreaInsets();
  const { favoriteMovies, setMovieDetails } = useMovie();

  const onPressItemCardMovie = useCallback((item: IPopularMovies) => {
    setMovieDetails(item);
    navigate("SingleDetails");
  }, []);

  return (
    <Container style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
      <MovieList
        data={favoriteMovies}
        keyExtractor={(item: any) => item.id.toString()}
        ListEmptyComponent={() => (
          <NoContentContainer>
            <NoContentText>Nenhum filme favorito encontrado!</NoContentText>
          </NoContentContainer>
        )}
        renderItem={({ item, index }) => (
          <ItemCardMovie
            isFavorite
            onPress={() => {
              onPressItemCardMovie(item as IPopularMovies);
            }}
            key={String(index)}
            data={item as IPopularMovies}
          />
        )}
      />
    </Container>
  );
};
